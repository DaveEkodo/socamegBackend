const express = require("express");
const router = express.Router();

const findAllController = require("../../controllers/utilisateur/findAllController");
const findOneController = require("../../controllers/utilisateur/findOneController");
const updateController = require("../../controllers/utilisateur/updateController");
const deleteController = require("../../controllers/utilisateur/deleteController");

const upload = require("../../middlewares/upload");

// ✅ Routes publiques (sans token)
router.get("/", findAllController.findAll);        // Lire tous
router.get("/:id", findOneController.findOne);    // Lire un seul
router.put("/:id", upload.single("photo"), updateController.update); // Modifier
router.delete("/:id", deleteController.delete);   // Supprimer

module.exports = router;
