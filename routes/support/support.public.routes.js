const express = require("express");
const router = express.Router();
const createController = require("../../controllers/support/createController");
const findAllController = require("../../controllers/support/findAllController");
const findOneController = require("../../controllers/support/findOneController");
const updateController = require("../../controllers/support/updateController");
const deleteController = require("../../controllers/support/deleteController");

// Routes publiques
router.post("/", createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.put("/:id", updateController.update);
router.delete("/:id", deleteController.delete);

module.exports = router;
