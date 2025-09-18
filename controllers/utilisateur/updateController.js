const db = require("../../models");
const Utilisateur = db.Utilisateur;
const bcrypt = require("bcrypt");
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

exports.update = async (req, res) => {
    try {
        const user = await Utilisateur.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

        if (req.file) {
            if (user.photo) await deleteFile(user.photo);
            req.body.photo = req.file.filename;
        }

        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        await Utilisateur.update(req.body, {
            where: { id_utilisateur: req.params.id }
        });

        const updatedUser = await Utilisateur.findByPk(req.params.id, {
            attributes: { exclude: ["password"] }
        });

        res.json(updatedUser);
    } catch (err) {
        if (req.file) await deleteFile(req.file.filename);
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
