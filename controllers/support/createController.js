const db = require("../../models");
const Support = db.Support;

exports.create = async (req, res) => {
    try {
        const { id_support, objet, contenu, date_envoi } = req.body;

        const support = await Support.create({
            id_support,
            objet,
            contenu,
            date_envoi: date_envoi ? new Date(date_envoi) : new Date()
        });

        res.status(201).json(support);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
