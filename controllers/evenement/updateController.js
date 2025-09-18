const db = require("../../models");
const Evenement = db.Evenement;
const fs = require("fs").promises;
const path = require("path");

exports.update = async (req, res) => {
    try {
        const evenement = await Evenement.findByPk(req.params.id);
        if (!evenement) {
            return res.status(404).json({ message: "Événement non trouvé" });
        }

        // Si une nouvelle image est envoyée
        if (req.file) {
            if (evenement.url_image) {
                const oldPath = path.join(__dirname, "../../uploads", evenement.url_image);
                try {
                    await fs.unlink(oldPath);
                    console.log("🗑️ Ancienne image supprimée :", evenement.url_image);
                } catch (err) {
                    console.log("⚠️ Impossible de supprimer l'ancienne image :", err.message);
                }
            }
            req.body.url_image = req.file.filename;
        }

        await Evenement.update(req.body, { where: { id_evenement: req.params.id } });

        const updated = await Evenement.findByPk(req.params.id);
        res.json(updated);
    } catch (err) {
        // rollback si erreur et qu’une nouvelle image a été envoyée
        if (req.file) {
            const newPath = path.join(__dirname, "../../uploads", req.file.filename);
            try {
                await fs.unlink(newPath);
                console.log("🗑️ Nouvelle image rollback supprimée :", req.file.filename);
            } catch (rollbackErr) {
                console.log("⚠️ Impossible de rollback la nouvelle image :", rollbackErr.message);
            }
        }
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
