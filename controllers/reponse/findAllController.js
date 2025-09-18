const db = require("../../models");
const Reponse = db.Reponse;

exports.findAll = async (req, res) => {
    try {
        const reponses = await Reponse.findAll({
            include: ["besoin"]
        });
        res.json(reponses);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
