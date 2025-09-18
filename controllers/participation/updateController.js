const db = require("../../models");
const Participation = db.Participation;

exports.update = async (req, res) => {
    try {
        const participation = await Participation.findByPk(req.params.id);
        if (!participation) {
            return res.status(404).json({ message: "Participation non trouvée" });
        }

        await Participation.update(req.body, { where: { id_participation: req.params.id } });

        const updated = await Participation.findByPk(req.params.id, {
            include: ["evenement", "utilisateur"]
        });

        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
