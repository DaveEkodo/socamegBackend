const db = require("../../models");
const Vue = db.Vue;
const Article = db.Article;
const Utilisateur = db.Utilisateur;

exports.findAll = async (req, res) => {
    try {
        const vues = await Vue.findAll({
            include: [
                { model: Article, as: "article" },
                { model: Utilisateur, as: "utilisateur", attributes: ["id_utilisateur", "nom", "prenom", "email", "photo"] }
            ]
        });
        res.json(vues);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
