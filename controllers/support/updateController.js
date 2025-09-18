const db = require("../../models");
const Support = db.Support;

exports.update = async (req, res) => {
    try {
        const support = await Support.findByPk(req.params.id);
        if (!support) {
            return res.status(404).json({ message: "Support non trouvé" });
        }

        await support.update(req.body);
        res.json({ message: "Support mis à jour avec succès", support });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
