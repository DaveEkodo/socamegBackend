const db = require("../../models");
const Besoin = db.Besoin;

exports.update = async (req, res) => {
    try {
        const { titre, contenu } = req.body;
        const besoin = await Besoin.findByPk(req.params.id);

        if (!besoin) {
            return res.status(404).json({ message: "Besoin non trouvé" });
        }

        await Besoin.update(
            { titre, contenu },
            { where: { id_besoin: req.params.id } }
        );

        const updated = await Besoin.findByPk(req.params.id);
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
