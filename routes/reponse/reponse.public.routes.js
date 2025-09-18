const express = require("express");
const router = express.Router();
const createController = require("../../controllers/reponse/createController");
const findAllController = require("../../controllers/reponse/findAllController");
const findOneController = require("../../controllers/reponse/findOneController");
const updateController = require("../../controllers/reponse/updateController");
const deleteController = require("../../controllers/reponse/deleteController");

// CRUD public (lecture seule)
router.post("/", createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.put("/:id", updateController.update);
router.delete("/:id", deleteController.delete);

module.exports = router;
