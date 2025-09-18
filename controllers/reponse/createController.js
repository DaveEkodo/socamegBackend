const db = require("../../models");
const Reponse = db.Reponse;

exports.create = async (req, res) => {
    try {
        const { id_reponse, contenu, statut, id_besoin } = req.body;

        const reponse = await Reponse.create({
            id_reponse,
            contenu,
            statut,
            id_besoin
        });

        res.status(201).json({
            message: "Réponse créée avec succès",
            reponse
        });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
