const db = require("../../models");
const Participation = db.Participation;

exports.create = async (req, res) => {
    try {
        const { id_participation, statut, id_evenement, id_utilisateur } = req.body;

        const participation = await Participation.create({
            id_participation,
            statut,
            id_evenement,
            id_utilisateur
        });

        res.status(201).json({
            message: "Participation ajoutée avec succès",
            participation
        });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
