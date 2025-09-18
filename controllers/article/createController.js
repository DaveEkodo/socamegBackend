// controllers/article/createController.js
const db = require("../../models");
const Article = db.Article;
const Utilisateur = db.Utilisateur;

exports.create = async (req, res) => {
    try {
        const { id_article, titre, contenu, date_publication, statut, id_utilisateur } = req.body;

        // Gestion de l'image
        const url_image = req.file ? req.file.filename : null;

        const article = await Article.create({
            id_article,
            titre,
            contenu,
            url_image,
            date_publication,
            statut,
            id_utilisateur
        });

        // Recharger avec l'association utilisateur
        const articleWithUser = await Article.findOne({
            where: { id_article: article.id_article },
            include: [
                {
                    model: Utilisateur,
                    as: "utilisateur",
                    attributes: [
                        "id_utilisateur",
                        "nom",
                        "prenom",
                        "email",
                        "role",
                        "photo"
                    ] // 🔥 on limite les colonnes utiles
                }
            ]
        });

        res.status(201).json(articleWithUser);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
