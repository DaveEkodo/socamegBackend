const express = require("express");
const router = express.Router();
const createController = require("../../controllers/commentaire/createController");
const findAllController = require("../../controllers/commentaire/findAllController");
const findOneController = require("../../controllers/commentaire/findOneController");
const updateController = require("../../controllers/commentaire/updateController");
const deleteController = require("../../controllers/commentaire/deleteController");

// Routes publiques
router.post("/", createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.put("/:id", updateController.update);
router.delete("/:id", deleteController.delete);

module.exports = router;
