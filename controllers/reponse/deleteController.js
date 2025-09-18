const db = require("../../models");
const Reponse = db.Reponse;

exports.delete = async (req, res) => {
    try {
        const reponse = await Reponse.findByPk(req.params.id);
        if (!reponse) {
            return res.status(404).json({ message: "Réponse non trouvée" });
        }

        await Reponse.destroy({ where: { id_reponse: req.params.id } });

        res.json({ message: "Réponse supprimée avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
