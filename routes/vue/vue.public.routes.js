const express = require("express");
const router = express.Router();
const createController = require("../../controllers/vue/createController");
const findAllController = require("../../controllers/vue/findAllController");
const findOneController = require("../../controllers/vue/findOneController");
const deleteController = require("../../controllers/vue/deleteController");

// Routes publiques
router.post("/", createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.delete("/:id", deleteController.delete);

module.exports = router;
