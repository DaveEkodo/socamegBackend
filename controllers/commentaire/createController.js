const db = require("../../models");
const Commentaire = db.Commentaire;
const Utilisateur = db.Utilisateur;

exports.create = async (req, res) => {
    try {
        const { id_commentaire, contenu, id_utilisateur, statut } = req.body;

        const commentaire = await Commentaire.create({
            id_commentaire,
            contenu,
            statut,
            id_utilisateur
        });

        const fullCommentaire = await Commentaire.findByPk(commentaire.id_commentaire, {
            include: [
                { model: Utilisateur, as: "utilisateur", attributes: ["id_utilisateur", "nom", "prenom", "email", "photo"] }
            ]
        });

        res.status(201).json(fullCommentaire);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
