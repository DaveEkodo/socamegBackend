const db = require("../../models");
const Article = db.Article;

exports.findAll = async (req, res) => {
    try {
        const articles = await Article.findAll({
            include: ["utilisateur"]
        });
        res.json(articles);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
