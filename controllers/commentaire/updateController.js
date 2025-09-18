const db = require("../../models");
const Commentaire = db.Commentaire;

exports.update = async (req, res) => {
    try {
        const commentaire = await Commentaire.findByPk(req.params.id);
        if (!commentaire) {
            return res.status(404).json({ message: "Commentaire non trouvé" });
        }

        await commentaire.update(req.body);
        res.json({ message: "Commentaire mis à jour avec succès", commentaire });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
