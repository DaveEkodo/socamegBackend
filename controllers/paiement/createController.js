const db = require("../../models");
const Paiement = db.Paiement;

exports.create = async (req, res) => {
    try {
        const { id_paiement, date_transfert, heure, id_utilisateur } = req.body;

        const paiement = await Paiement.create({
            id_paiement,
            date_transfert: date_transfert ? new Date(date_transfert) : new Date(),
            heure,
            id_utilisateur
        });

        res.status(201).json(paiement);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
