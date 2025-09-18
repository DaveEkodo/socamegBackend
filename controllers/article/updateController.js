const db = require("../../models");
const Article = db.Article;
const fs = require("fs").promises;
const path = require("path");

exports.update = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (!article) return res.status(404).json({ message: "Article non trouvé" });

        // Gestion image : suppression de l’ancienne si nouvelle
        if (req.file) {
                    if (article.url_image) {
                        const oldPath = path.join(__dirname, "../../uploads", article.url_image);
                        try {
                            await fs.unlink(oldPath);
                            console.log("🗑️ Ancienne image supprimée :", article.url_image);
                        } catch (err) {
                            console.log("⚠️ Impossible de supprimer l'ancienne image :", err.message);
                        }
                    }
                    req.body.url_image = req.file.filename;
                }

        await Article.update(req.body, { where: { id_article: req.params.id } });

        const updatedArticle = await Article.findByPk(req.params.id, {
            include: [ "utilisateur"]
        });

        res.json({ message: "✅ Article mis à jour avec succès", article: updatedArticle });
    } catch (err) {
        // rollback : si nouvelle image uploadée mais erreur => suppression
        if (req.file) {
            const filePath = path.join(__dirname, "../../uploads/articles", req.file.filename);
            await fs.unlink(filePath).catch(() => {});
        }
        res.status(500).json({ message: "❌ Erreur serveur", details: err.message });
    }
};
