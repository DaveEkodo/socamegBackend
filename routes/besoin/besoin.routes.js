const express = require("express");
const router = express.Router();

const createController = require("../../controllers/besoin/createController");
const findAllController = require("../../controllers/besoin/findAllController");
const findOneController = require("../../controllers/besoin/findOneController");
const updateController = require("../../controllers/besoin/updateController");
const deleteController = require("../../controllers/besoin/deleteController");

const auth = require("../../middlewares/auth");

// Routes protégées (JWT requis)
router.post("/", auth, createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, updateController.update);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
