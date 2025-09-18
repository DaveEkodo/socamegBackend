const db = require("../../models");
const Paiement = db.Paiement;
const Utilisateur = db.Utilisateur;

exports.findAll = async (req, res) => {
    try {
        const paiements = await Paiement.findAll({
            include: [
                {
                    model: Utilisateur,
                    as: "utilisateur",
                    attributes: ["id_utilisateur", "nom", "prenom", "email", "role"]
                }
            ]
        });
        res.json(paiements);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
