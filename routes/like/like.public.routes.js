const express = require("express");
const router = express.Router();
const createController = require("../../controllers/like/createController");
const findAllController = require("../../controllers/like/findAllController");
const findOneController = require("../../controllers/like/findOneController");
const deleteController = require("../../controllers/like/deleteController");

// Routes publiques
router.post("/", createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.delete("/:id", deleteController.delete);

module.exports = router;
