const db = require("../../models");
const Abonnement = db.Abonnement;

exports.create = async (req, res) => {
    try {
        const { id_abonnement, tarif, statut, date_debut, date_fin, id_utilisateur } = req.body;

        const abonnement = await Abonnement.create({
            id_abonnement,
            tarif,
            statut,
            date_debut,
            date_fin,
            id_utilisateur
        });

        res.status(201).json({
            message: "Abonnement créé avec succès",
            abonnement
        });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
