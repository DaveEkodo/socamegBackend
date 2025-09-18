const db = require("../../models");
const Support = db.Support;

exports.findAll = async (req, res) => {
    try {
        const supports = await Support.findAll();
        res.json(supports);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
