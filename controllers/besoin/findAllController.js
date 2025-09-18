const db = require("../../models");
const Besoin = db.Besoin;

exports.findAll = async (req, res) => {
    try {
        const besoins = await Besoin.findAll({ include: ["reponses"] });
        res.json(besoins);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
