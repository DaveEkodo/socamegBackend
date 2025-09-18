const db = require("../../models");
const Evenement = db.Evenement;

exports.create = async (req, res) => {
    try {
        const {
            id_evenement,
            titre,
            description,
            url_image,
            date_debut,
            date_fin,
            statut
        } = req.body;

        const evenement = await Evenement.create({
            id_evenement,
            titre,
            description,
            url_image: req.file ? req.file.filename : url_image,
            date_debut,
            date_fin,
            statut
        });

        res.status(201).json({
            message: "Évènement créé avec succès",
            evenement
        });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
