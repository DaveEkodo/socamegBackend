const db = require("../../models");
const Like = db.Like;
const Article = db.Article;
const Utilisateur = db.Utilisateur;

exports.create = async (req, res) => {
    try {
        const { id_like, id_article, id_utilisateur } = req.body;

        // Vérifier si le like existe déjà (un utilisateur ne like pas 2x le même article)
        const exist = await Like.findOne({ where: { id_article, id_utilisateur } });
        if (exist) {
            return res.status(400).json({ message: "Cet utilisateur a déjà liké cet article." });
        }

        const like = await Like.create({ id_like, id_article, id_utilisateur });

        const fullLike = await Like.findByPk(like.id_like, {
            include: [
                { model: Article, as: "article" },
                { model: Utilisateur, as: "utilisateur", attributes: ["id_utilisateur", "nom", "prenom", "email", "photo"] }
            ]
        });

        res.status(201).json(fullLike);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
