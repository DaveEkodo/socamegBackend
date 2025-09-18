const db = require("../../models");
const Evenement = db.Evenement;

exports.findAll = async (req, res) => {
    try {
        const evenements = await Evenement.findAll();
        res.json(evenements);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
