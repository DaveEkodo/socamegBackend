// ======================
// Déconnexion utilisateur
// ======================
exports.logout = async (req, res) => {
    try {
        // ⚠️ Comme on utilise JWT, la déconnexion se fait côté client 
        // en supprimant le token stocké (localStorage, cookies...).
        // Ici on renvoie juste une réponse.
        
        res.json({ message: "Déconnexion réussie. Supprimez le token côté client." });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
