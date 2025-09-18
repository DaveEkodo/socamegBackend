const db = require("../../models");
const Evenement = db.Evenement;
const fs = require("fs").promises;
const path = require("path");

exports.delete = async (req, res) => {
    try {
        const evenement = await Evenement.findByPk(req.params.id);
        if (!evenement) {
            return res.status(404).json({ message: "Événement non trouvé" });
        }

        // Supprimer aussi l’image si elle existe
        if (evenement.url_image) {
            const oldPath = path.join(__dirname, "../../uploads", evenement.url_image);
            try {
                await fs.unlink(oldPath);
                console.log("🗑️ Image supprimée :", evenement.url_image);
            } catch (err) {
                console.log("⚠️ Impossible de supprimer l'image :", err.message);
            }
        }

        await Evenement.destroy({ where: { id_evenement: req.params.id } });

        res.json({ message: "Événement supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
