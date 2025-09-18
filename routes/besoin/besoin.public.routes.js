const express = require("express");
const router = express.Router();

const createController = require("../../controllers/besoin/createController");
const findAllController = require("../../controllers/besoin/findAllController");
const findOneController = require("../../controllers/besoin/findOneController");
const updateController = require("../../controllers/besoin/updateController");
const deleteController = require("../../controllers/besoin/deleteController");

// Routes publiques (pas de JWT)
router.post("/", createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.put("/:id", updateController.update);
router.delete("/:id", deleteController.delete);

module.exports = router;
