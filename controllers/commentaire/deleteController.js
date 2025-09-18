const db = require("../../models");
const Commentaire = db.Commentaire;

exports.delete = async (req, res) => {
    try {
        const commentaire = await Commentaire.findByPk(req.params.id);
        if (!commentaire) {
            return res.status(404).json({ message: "Commentaire non trouvé" });
        }

        await commentaire.destroy();
        res.json({ message: "Commentaire supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
