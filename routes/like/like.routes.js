const express = require("express");
const router = express.Router();
const createController = require("../../controllers/like/createController");
const findAllController = require("../../controllers/like/findAllController");
const findOneController = require("../../controllers/like/findOneController");
const deleteController = require("../../controllers/like/deleteController");
const auth = require("../../middlewares/auth");

// Routes protégées
router.post("/", auth, createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
