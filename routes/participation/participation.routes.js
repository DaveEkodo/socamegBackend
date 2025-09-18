const express = require("express");
const router = express.Router();
const createController = require("../../controllers/participation/createController");
const findAllController = require("../../controllers/participation/findAllController");
const findOneController = require("../../controllers/participation/findOneController");
const updateController = require("../../controllers/participation/updateController");
const deleteController = require("../../controllers/participation/deleteController");
const auth = require("../../middlewares/auth");

// Routes sécurisées
router.post("/", auth, createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, updateController.update);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
