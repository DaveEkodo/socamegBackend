const db = require("../../models");
const Utilisateur = db.Utilisateur;
const fs = require("fs").promises;
const path = require("path");

const deleteFile = async (filename) => {
    if (!filename) return;
    const filePath = path.join(__dirname, "../../uploads", filename);
    try {
        await fs.unlink(filePath);
    } catch (err) {
        console.log(`⚠️ Impossible de supprimer la photo: ${filename}`);
    }
};

exports.delete = async (req, res) => {
    try {
        const user = await Utilisateur.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

        if (user.photo) await deleteFile(user.photo);

        await Utilisateur.destroy({ where: { id_utilisateur: req.params.id } });

        res.json({ message: "Utilisateur supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
