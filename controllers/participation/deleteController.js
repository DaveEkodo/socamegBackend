const db = require("../../models");
const Participation = db.Participation;

exports.delete = async (req, res) => {
    try {
        const participation = await Participation.findByPk(req.params.id);
        if (!participation) {
            return res.status(404).json({ message: "Participation non trouvée" });
        }

        await Participation.destroy({ where: { id_participation: req.params.id } });

        res.json({ message: "Participation supprimée avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
