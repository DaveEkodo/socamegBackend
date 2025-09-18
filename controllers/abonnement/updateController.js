const db = require("../../models");
const Abonnement = db.Abonnement;

exports.update = async (req, res) => {
  try {
    const abonnement = await Abonnement.findByPk(req.params.id);
    if (!abonnement) {
      return res.status(404).json({ message: "Abonnement non trouvé" });
    }

    await Abonnement.update(req.body, { where: { id_abonnement: req.params.id } });

    const updated = await Abonnement.findByPk(req.params.id);
    res.json({ message: "Abonnement mis à jour avec succès", abonnement: updated });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", details: err.message });
  }
};
