const db = require("../../models");
const Commentaire = db.Commentaire;
const Utilisateur = db.Utilisateur;

exports.findOne = async (req, res) => {
    try {
        const commentaire = await Commentaire.findByPk(req.params.id, {
            include: [
                { model: Utilisateur, as: "utilisateur", attributes: ["id_utilisateur", "nom", "prenom", "email", "photo"] }
            ]
        });

        if (!commentaire) {
            return res.status(404).json({ message: "Commentaire non trouvé" });
        }

        res.json(commentaire);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
