const db = require("../../models");
const Like = db.Like;

exports.delete = async (req, res) => {
    try {
        const like = await Like.findByPk(req.params.id);
        if (!like) {
            return res.status(404).json({ message: "Like non trouvé" });
        }

        await like.destroy();
        res.json({ message: "Like supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
