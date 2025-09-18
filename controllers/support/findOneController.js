const db = require("../../models");
const Support = db.Support;

exports.findOne = async (req, res) => {
    try {
        const support = await Support.findByPk(req.params.id);
        if (!support) {
            return res.status(404).json({ message: "Support non trouvé" });
        }
        res.json(support);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
