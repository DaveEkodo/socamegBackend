const express = require("express");
const router = express.Router();
const createController = require("../../controllers/participation/createController");
const findAllController = require("../../controllers/participation/findAllController");
const findOneController = require("../../controllers/participation/findOneController");
const updateController = require("../../controllers/participation/updateController");
const deleteController = require("../../controllers/participation/deleteController");

// Routes publiques (sans authentification)
router.post("/", createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.put("/:id", updateController.update);
router.delete("/:id", deleteController.delete);

module.exports = router;
