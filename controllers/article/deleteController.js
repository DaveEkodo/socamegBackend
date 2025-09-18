const db = require("../../models");
const Article = db.Article;
const fs = require("fs").promises;
const path = require("path");

exports.delete = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (!article) return res.status(404).json({ message: "Article non trouvé" });

        // Supprimer l’image liée si elle existe
        if (article.url_image) {
                    const oldPath = path.join(__dirname, "../../uploads", article.url_image);
                    try {
                        await fs.unlink(oldPath);
                        console.log("🗑️ Image supprimée :", article.url_image);
                    } catch (err) {
                        console.log("⚠️ Impossible de supprimer l'image :", err.message);
                    }
                }

        await Article.destroy({ where: { id_article: req.params.id } });

        res.json({ message: "🗑️ Article supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "❌ Erreur serveur", details: err.message });
    }
};
