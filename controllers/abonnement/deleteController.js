const db = require("../../models");
const Abonnement = db.Abonnement;

exports.delete = async (req, res) => {
  try {
    const abonnement = await Abonnement.findByPk(req.params.id);
    if (!abonnement) {
      return res.status(404).json({ message: "Abonnement non trouvé" });
    }

    await Abonnement.destroy({ where: { id_abonnement: req.params.id } });

    res.json({ message: "Abonnement supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", details: err.message });
  }
};
