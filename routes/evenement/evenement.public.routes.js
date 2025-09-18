const express = require("express");
const router = express.Router();
const createController = require("../../controllers/evenement/createController");
const findAllController = require("../../controllers/evenement/findAllController");
const findOneController = require("../../controllers/evenement/findOneController");
const updateController = require("../../controllers/evenement/updateController");
const deleteController = require("../../controllers/evenement/deleteController");
const upload = require("../../middlewares/upload");

// Routes publiques (pas besoin de token)
router.post("/", upload.single("url_image"), createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.put("/:id", upload.single("url_image"), updateController.update);
router.delete("/:id", deleteController.delete);

module.exports = router;
