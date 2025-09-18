const db = require("../../models");
const Article = db.Article;

exports.findOne = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id,{
            include: ["utilisateur"]
        });

        if (!article) {
            return res.status(404).json({ message: "Article non trouvé" });
        }
        res.json(article);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
