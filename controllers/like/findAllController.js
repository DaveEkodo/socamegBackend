const db = require("../../models");
const Like = db.Like;
const Article = db.Article;
const Utilisateur = db.Utilisateur;

exports.findAll = async (req, res) => {
    try {
        const likes = await Like.findAll({
            include: [
                { model: Article, as: "article" },
                { model: Utilisateur, as: "utilisateur", attributes: ["id_utilisateur", "nom", "prenom", "email", "photo"] }
            ]
        });
        res.json(likes);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
