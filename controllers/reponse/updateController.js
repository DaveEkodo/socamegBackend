const db = require("../../models");
const Reponse = db.Reponse;

exports.update = async (req, res) => {
    try {
        const reponse = await Reponse.findByPk(req.params.id);
        if (!reponse) {
            return res.status(404).json({ message: "Réponse non trouvée" });
        }

        await Reponse.update(req.body, { where: { id_reponse: req.params.id } });
        const updatedReponse = await Reponse.findByPk(req.params.id);

        res.json({
            message: "Réponse mise à jour avec succès",
            reponse: updatedReponse
        });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
