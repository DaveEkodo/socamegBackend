const db = require("../../models");
const Paiement = db.Paiement;

exports.delete = async (req, res) => {
    try {
        const paiement = await Paiement.findByPk(req.params.id);
        if (!paiement) {
            return res.status(404).json({ message: "Paiement non trouvé" });
        }

        await paiement.destroy();
        res.json({ message: "Paiement supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
