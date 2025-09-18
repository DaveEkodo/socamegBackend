const db = require("../../models");
const Participation = db.Participation;

exports.findAll = async (req, res) => {
    try {
        const participations = await Participation.findAll({
            include: ["evenement", "utilisateur"]
        });
        res.json(participations);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
