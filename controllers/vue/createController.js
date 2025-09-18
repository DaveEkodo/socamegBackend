const db = require("../../models");
const Vue = db.Vue;
const Article = db.Article;
const Utilisateur = db.Utilisateur;

exports.create = async (req, res) => {
    try {
        const {id_article, id_utilisateur } = req.body;

        // Vérifier si la vue existe déjà (un utilisateur ne peut "voir" qu'une seule fois un article)
        const exist = await Vue.findOne({ where: { id_article, id_utilisateur } });
        if (exist) {
            return res.status(400).json({ message: "Cet utilisateur a déjà vu cet article." });
        }

        const vue = await Vue.create({ id_article, id_utilisateur });

        const fullVue = await Vue.findByPk(vue.id_vue, {
            include: [
                { model: Article, as: "article" },
                { model: Utilisateur, as: "utilisateur", attributes: ["id_utilisateur", "nom", "prenom", "email", "photo"] }
            ]
        });

        res.status(201).json(fullVue);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
