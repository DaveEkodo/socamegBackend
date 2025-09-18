const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// ======================
// Middlewares globaux
// ======================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques (photos uploadées)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ======================
// Import des routes
// ======================
const registerRoutes = require("./routes/auth/register.routes");
const loginRoutes = require("./routes/auth/login.routes");
const utilisateurRoutes = require("./routes/utilisateur/utilisateur.routes");
const utilisateurPublicRoutes = require("./routes/utilisateur/utilisateur.public.routes");
const besoinRoutes = require("./routes/besoin/besoin.routes");
const besoinPublicRoutes = require("./routes/besoin/besoin.public.routes");
const reponseRoutes = require("./routes/reponse/reponse.routes");
const reponsePublicRoutes = require("./routes/reponse/reponse.public.routes");
const evenementRoutes = require("./routes/evenement/evenement.routes");
const evenementPublicRoutes = require("./routes/evenement/evenement.public.routes");
const participationRoutes = require("./routes/participation/participation.routes");
const participationPublicRoutes = require("./routes/participation/participation.public.routes");
const abonnementRoutes = require("./routes/abonnement/abonnement.routes");
const abonnementPublicRoutes = require("./routes/abonnement/abonnement.public.routes");
const articleRoutes = require("./routes/article/article.routes");
const articlePublicRoutes = require("./routes/article/article.public.routes");
const likeRoutes = require("./routes/like/like.routes");
const likePublicRoutes = require("./routes/like/like.public.routes");
const vueRoutes = require("./routes/vue/vue.routes");
const vuePublicRoutes = require("./routes/vue/vue.public.routes");
const commentaireRoutes = require("./routes/commentaire/commentaire.routes");
const commentairePublicRoutes = require("./routes/commentaire/commentaire.public.routes");
const supportRoutes = require("./routes/support/support.routes");
const supportPublicRoutes = require("./routes/support/support.public.routes");
const paiementRoutes = require("./routes/paiement/paiement.routes");
const paiementPublicRoutes = require("./routes/paiement/paiement.public.routes");

// ======================
// Utilisation des routes
// ======================
app.use("/api/auth", registerRoutes);
app.use("/api/auth", loginRoutes);

// 🔐 Routes protégées (avec token)
app.use("/api/utilisateurs", utilisateurRoutes);
app.use("/api/besoins", besoinRoutes); 
app.use("/api/reponses", reponseRoutes); 
app.use("/api/evenements", evenementRoutes);
app.use("/api/participations", participationRoutes);
app.use("/api/abonnements", abonnementRoutes); 
app.use("/api/articles", articleRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/vues", vueRoutes);
app.use("/api/commentaires", commentaireRoutes);
app.use("/api/supports", supportRoutes);
app.use("/api/paiements", paiementRoutes);

// 🔓 Routes publiques (sans token)
app.use("/api/public/utilisateurs", utilisateurPublicRoutes);
app.use("/api/public/besoins", besoinPublicRoutes);
app.use("/api/public/reponses", reponsePublicRoutes);
app.use("/api/public/evenements", evenementPublicRoutes);
app.use("/api/public/participations", participationPublicRoutes);
app.use("/api/public/abonnements", abonnementPublicRoutes);
app.use("/api/public/articles", articlePublicRoutes);
app.use("/api/public/likes", likePublicRoutes);
app.use("/api/public/vues", vuePublicRoutes);
app.use("/api/public/commentaires", commentairePublicRoutes);
app.use("/api/public/supports", supportPublicRoutes);
app.use("/api/public/paiements", paiementPublicRoutes);

// ======================
// Démarrage du serveur
// ======================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
