const db = require("../../models");
const Utilisateur = db.Utilisateur;

exports.findOne = async (req, res) => {
    try {
        const user = await Utilisateur.findByPk(req.params.id, {
            attributes: { exclude: ["password"] }
        });
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
