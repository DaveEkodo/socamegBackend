const express = require("express");
const router = express.Router();
const createController = require("../../controllers/paiement/createController");
const findAllController = require("../../controllers/paiement/findAllController");
const findOneController = require("../../controllers/paiement/findOneController");
const updateController = require("../../controllers/paiement/updateController");
const deleteController = require("../../controllers/paiement/deleteController");
const auth = require("../../middlewares/auth");

// Routes protégées
router.post("/", auth, createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, updateController.update);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
