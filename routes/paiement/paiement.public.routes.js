const express = require("express");
const router = express.Router();
const createController = require("../../controllers/paiement/createController");
const findAllController = require("../../controllers/paiement/findAllController");
const findOneController = require("../../controllers/paiement/findOneController");
const updateController = require("../../controllers/paiement/updateController");
const deleteController = require("../../controllers/paiement/deleteController");

// Routes publiques
router.post("/", createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.put("/:id", updateController.update);
router.delete("/:id", deleteController.delete);

module.exports = router;
