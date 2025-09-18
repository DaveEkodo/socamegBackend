const multer = require("multer");
const path = require("path");

// Configuration du stockage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // dossier où stocker les images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // ex: 169314546.png
    }
});

// Filtrer uniquement les images
const fileFilter = (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/jpg"];
    if (allowed.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Seules les images sont autorisées !"), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
