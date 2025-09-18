const express = require("express");
const router = express.Router();
const createController = require("../../controllers/evenement/createController");
const findAllController = require("../../controllers/evenement/findAllController");
const findOneController = require("../../controllers/evenement/findOneController");
const updateController = require("../../controllers/evenement/updateController");
const deleteController = require("../../controllers/evenement/deleteController");
const upload = require("../../middlewares/upload");
const auth = require("../../middlewares/auth");

// CRUD protégé
router.post("/", auth, upload.single("url_image"), createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, upload.single("url_image"), updateController.update);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
