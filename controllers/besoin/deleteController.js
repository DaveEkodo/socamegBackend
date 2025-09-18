const db = require("../../models");
const Besoin = db.Besoin;

exports.delete = async (req, res) => {
    try {
        const besoin = await Besoin.findByPk(req.params.id);
        if (!besoin) {
            return res.status(404).json({ message: "Besoin non trouvé" });
        }

        await Besoin.destroy({ where: { id_besoin: req.params.id } });
        res.json({ message: "Besoin supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
