const db = require("../../models");
const Besoin = db.Besoin;

exports.findOne = async (req, res) => {
    try {
        const besoin = await Besoin.findByPk(req.params.id, { include: ["reponses"] });
        if (!besoin) {
            return res.status(404).json({ message: "Besoin non trouvé" });
        }
        res.json(besoin);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
