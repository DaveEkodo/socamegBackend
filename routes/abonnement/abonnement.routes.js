const express = require("express");
const router = express.Router();
const createController = require("../../controllers/abonnement/createController");
const findAllController = require("../../controllers/abonnement/findAllController");
const findOneController = require("../../controllers/abonnement/findOneController");
const updateController = require("../../controllers/abonnement/updateController");
const deleteController = require("../../controllers/abonnement/deleteController");
const auth = require("../../middlewares/auth");

// CRUD sécurisé
router.post("/", auth, createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, updateController.update);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
