const db = require("../../models");
const Like = db.Like;
const Article = db.Article;
const Utilisateur = db.Utilisateur;

exports.findOne = async (req, res) => {
    try {
        const like = await Like.findByPk(req.params.id, {
            include: [
                { model: Article, as: "article" },
                { model: Utilisateur, as: "utilisateur", attributes: ["id_utilisateur", "nom", "prenom", "email", "photo"] }
            ]
        });

        if (!like) {
            return res.status(404).json({ message: "Like non trouvé" });
        }

        res.json(like);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
