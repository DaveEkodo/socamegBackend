const db = require("../../models");
const Besoin = db.Besoin;

// ======================
// Créer un besoin
// ======================
exports.create = async (req, res) => {
    try {
        const { id_besoin, titre, contenu } = req.body;

        if (!titre || !contenu) {
            return res.status(400).json({ message: "Tous les champs sont obligatoires" });
        }

        const exist = await Besoin.findByPk(id_besoin);
        if (exist) {
            return res.status(400).json({ message: "Cet identifiant de besoin existe déjà" });
        }

        const besoin = await Besoin.create({
            id_besoin,
            titre,
            contenu
        });

        res.status(201).json(besoin);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
