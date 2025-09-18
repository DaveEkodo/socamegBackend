const express = require("express");
const router = express.Router();
const createController = require("../../controllers/abonnement/createController");
const findAllController = require("../../controllers/abonnement/findAllController");
const findOneController = require("../../controllers/abonnement/findOneController");
const updateController = require("../../controllers/abonnement/updateController");
const deleteController = require("../../controllers/abonnement/deleteController");

// CRUD public
router.post("/", createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.put("/:id", updateController.update);
router.delete("/:id", deleteController.delete);

module.exports = router;
