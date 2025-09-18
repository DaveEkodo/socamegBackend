const express = require("express");
const router = express.Router();
const createController = require("../../controllers/vue/createController");
const findAllController = require("../../controllers/vue/findAllController");
const findOneController = require("../../controllers/vue/findOneController");
const deleteController = require("../../controllers/vue/deleteController");
const auth = require("../../middlewares/auth");

// Routes protégées
router.post("/", auth, createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
