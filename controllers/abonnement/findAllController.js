const db = require("../../models");
const Abonnement = db.Abonnement;

exports.findAll = async (req, res) => {
  try {
    const abonnements = await Abonnement.findAll({
      include: ["utilisateur"]
    });
    res.json(abonnements);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", details: err.message });
  }
};
