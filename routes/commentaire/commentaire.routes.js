const express = require("express");
const router = express.Router();
const createController = require("../../controllers/commentaire/createController");
const findAllController = require("../../controllers/commentaire/findAllController");
const findOneController = require("../../controllers/commentaire/findOneController");
const updateController = require("../../controllers/commentaire/updateController");
const deleteController = require("../../controllers/commentaire/deleteController");
const auth = require("../../middlewares/auth");

// Routes protégées
router.post("/", auth, createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, updateController.update);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
