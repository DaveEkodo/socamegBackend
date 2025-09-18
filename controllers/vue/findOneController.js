const db = require("../../models");
const Vue = db.Vue;
const Article = db.Article;
const Utilisateur = db.Utilisateur;

exports.findOne = async (req, res) => {
    try {
        const vue = await Vue.findByPk(req.params.id, {
            include: [
                { model: Article, as: "article" },
                { model: Utilisateur, as: "utilisateur", attributes: ["id_utilisateur", "nom", "prenom", "email", "photo"] }
            ]
        });

        if (!vue) {
            return res.status(404).json({ message: "Vue non trouvée" });
        }

        res.json(vue);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
