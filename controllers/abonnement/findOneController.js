const db = require("../../models");
const Abonnement = db.Abonnement;

exports.findOne = async (req, res) => {
  try {
    const abonnement = await Abonnement.findByPk(req.params.id, {
      include: ["utilisateur"]
    });
    if (!abonnement) {
      return res.status(404).json({ message: "Abonnement non trouvé" });
    }
    res.json(abonnement);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", details: err.message });
  }
};
