const db = require("../../models");
const Commentaire = db.Commentaire;
const Utilisateur = db.Utilisateur;

exports.findAll = async (req, res) => {
    try {
        const commentaires = await Commentaire.findAll({
            include: [
                { model: Utilisateur, as: "utilisateur", attributes: ["id_utilisateur", "nom", "prenom", "email", "photo"] }
            ]
        });
        res.json(commentaires);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
