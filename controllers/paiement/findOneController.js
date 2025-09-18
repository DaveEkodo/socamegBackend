const db = require("../../models");
const Paiement = db.Paiement;
const Utilisateur = db.Utilisateur;

exports.findOne = async (req, res) => {
    try {
        const paiement = await Paiement.findByPk(req.params.id, {
            include: [
                {
                    model: Utilisateur,
                    as: "utilisateur",
                    attributes: ["id_utilisateur", "nom", "prenom", "email", "role"]
                }
            ]
        });
        if (!paiement) {
            return res.status(404).json({ message: "Paiement non trouvé" });
        }
        res.json(paiement);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
