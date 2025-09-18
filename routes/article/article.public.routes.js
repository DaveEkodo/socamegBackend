const express = require("express");
const router = express.Router();
const createController = require("../../controllers/article/createController");
const findAllController = require("../../controllers/article/findAllController");
const findOneController = require("../../controllers/article/findOneController");
const updateController = require("../../controllers/article/updateController");
const deleteController = require("../../controllers/article/deleteController");
const upload = require("../../middlewares/upload");

// Routes publiques
router.post("/", upload.single("url_image"), createController.create);
router.get("/", findAllController.findAll);
router.get("/:id", findOneController.findOne);
router.put("/:id", upload.single("url_image"), updateController.update);
router.delete("/:id", deleteController.delete);

module.exports = router;
