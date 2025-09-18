const db = require("../../models");
const Participation = db.Participation;

exports.findOne = async (req, res) => {
    try {
        const participation = await Participation.findByPk(req.params.id, {
            include: ["evenement", "utilisateur"]
        });

        if (!participation) {
            return res.status(404).json({ message: "Participation non trouvée" });
        }

        res.json(participation);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
