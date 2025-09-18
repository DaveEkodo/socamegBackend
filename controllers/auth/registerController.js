const db = require("../../models");
const Utilisateur = db.Utilisateur;
const bcrypt = require("bcrypt");
const fs = require("fs").promises;
const path = require("path");

// Suppression fichier
const deleteFile = async (filename) => {
    if (!filename) return;
    const filePath = path.join(__dirname, "../../uploads", filename);
    try {
        await fs.unlink(filePath);
    } catch (err) {
        console.log(`⚠️ Impossible de supprimer le fichier ${filename}:`, err.message);
    }
};

// ======================
// Inscription utilisateur
// ======================
exports.register = async (req, res) => {
    try {
        const {
            id_utilisateur,
            nom,
            prenom,
            date_naissance,
            lieu_naissance,
            telephone,
            role,
            sexe,
            lieu_residence,
            lieu_exercice,
            annee_exercice,
            email,
            password,
            pays_obtention,
            annee_obtention,
            faculte,
            numero_ordre,
            en_cours,
            condamnation_penale,
            motif_condamnation,
            motivation,
            statut
        } = req.body;

        // Vérifier si email existe déjà
        const existUser = await Utilisateur.findOne({ where: { email } });
        if (existUser) {
            if (req.file) await deleteFile(req.file.filename);
            return res.status(400).json({ message: "Cet email est déjà utilisé." });
        }

        // Hashage mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Photo uploadée
        const photo = req.file ? req.file.filename : null;

        // Création
        const user = await Utilisateur.create({
            id_utilisateur,
            nom,
            prenom,
            date_naissance,
            lieu_naissance,
            telephone,
            role,
            sexe,
            lieu_residence,
            lieu_exercice,
            annee_exercice,
            email,
            password: hashedPassword,
            pays_obtention,
            annee_obtention,
            faculte,
            numero_ordre,
            en_cours,
            condamnation_penale,
            motif_condamnation,
            motivation,
            statut,
            derniere_connexion: new Date(),
            photo
        });

        res.status(201).json({
            message: "Utilisateur créé avec succès",
            user: {
                id_utilisateur: user.id_utilisateur,
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                role: user.role,
                photo: user.photo
            }
        });
    } catch (err) {
        if (req.file) await deleteFile(req.file.filename);
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
