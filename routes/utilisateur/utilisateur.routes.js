const express = require("express");
const router = express.Router();
const findAllController = require("../../controllers/utilisateur/findAllController");
const findOneController = require("../../controllers/utilisateur/findOneController");
const updateController = require("../../controllers/utilisateur/updateController");
const deleteController = require("../../controllers/utilisateur/deleteController");
const upload = require("../../middlewares/upload");
const auth = require("../../middlewares/auth");

// Routes protégées
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, upload.single("photo"), updateController.update);
router.delete("/:id", auth, deleteController.delete);


module.exports = router;
