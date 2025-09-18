const db = require("../../models");
const Utilisateur = db.Utilisateur;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "votre_cle_secrete";  
const JWT_EXPIRES_IN = "1h"; 

// ======================
// Connexion utilisateur
// ======================
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Utilisateur.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        const token = jwt.sign(
            { id_utilisateur: user.id_utilisateur, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        res.json({
            message: "Connexion réussie",
            token,
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
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
