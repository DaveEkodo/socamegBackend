const express = require("express");
const router = express.Router();
const createController = require("../../controllers/reponse/createController");
const findAllController = require("../../controllers/reponse/findAllController");
const findOneController = require("../../controllers/reponse/findOneController");
const updateController = require("../../controllers/reponse/updateController");
const deleteController = require("../../controllers/reponse/deleteController");
const auth = require("../../middlewares/auth");

// CRUD sécurisé
router.post("/", auth, createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, updateController.update);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
