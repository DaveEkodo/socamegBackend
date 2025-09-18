const jwt = require("jsonwebtoken");
const JWT_SECRET = "votre_cle_secrete"; // ⚠️ mettre dans .env en prod

module.exports = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "Token manquant" });
    }

    const token = authHeader.split(" ")[1]; // format "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: "Token invalide" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // { id_utilisateur, email, role }
        next();
    } catch (err) {
        return res.status(403).json({ message: "Token invalide ou expiré" });
    }
};
