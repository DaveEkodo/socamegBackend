const db = require("../../models");
const Utilisateur = db.Utilisateur;

exports.findAll = async (req, res) => {
    try {
        const users = await Utilisateur.findAll({
            attributes: { exclude: ["password"] }
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
