const db = require("../../models");
const Support = db.Support;

exports.delete = async (req, res) => {
    try {
        const support = await Support.findByPk(req.params.id);
        if (!support) {
            return res.status(404).json({ message: "Support non trouvé" });
        }

        await support.destroy();
        res.json({ message: "Support supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
