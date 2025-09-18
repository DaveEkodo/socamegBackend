const db = require("../../models");
const Reponse = db.Reponse;

exports.findOne = async (req, res) => {
    try {
        const reponse = await Reponse.findByPk(req.params.id, {
            include: ["besoin"]
        });
        if (!reponse) {
            return res.status(404).json({ message: "Réponse non trouvée" });
        }
        res.json(reponse);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
