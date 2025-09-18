const db = require("../../models");
const Paiement = db.Paiement;

exports.update = async (req, res) => {
    try {
        const paiement = await Paiement.findByPk(req.params.id);
        if (!paiement) {
            return res.status(404).json({ message: "Paiement non trouvé" });
        }

        await paiement.update(req.body);
        res.json({ message: "Paiement mis à jour avec succès", paiement });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
