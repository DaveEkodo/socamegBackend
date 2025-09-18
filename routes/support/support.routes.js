const express = require("express");
const router = express.Router();
const createController = require("../../controllers/support/createController");
const findAllController = require("../../controllers/support/findAllController");
const findOneController = require("../../controllers/support/findOneController");
const updateController = require("../../controllers/support/updateController");
const deleteController = require("../../controllers/support/deleteController");
const auth = require("../../middlewares/auth");

// Routes protégées
router.post("/", auth, createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, updateController.update);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
