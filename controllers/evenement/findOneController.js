const db = require("../../models");
const Evenement = db.Evenement;

exports.findOne = async (req, res) => {
    try {
        const evenement = await Evenement.findByPk(req.params.id);
        if (!evenement) {
            return res.status(404).json({ message: "Évènement non trouvé" });
        }
        res.json(evenement);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
