const express = require("express");
const router = express.Router();
const createController = require("../../controllers/article/createController");
const findAllController = require("../../controllers/article/findAllController");
const findOneController = require("../../controllers/article/findOneController");
const updateController = require("../../controllers/article/updateController");
const deleteController = require("../../controllers/article/deleteController");
const upload = require("../../middlewares/upload");
const auth = require("../../middlewares/auth");

// Routes sécurisées
router.post("/", auth, upload.single("url_image"), createController.create);
router.get("/", auth, findAllController.findAll);
router.get("/:id", auth, findOneController.findOne);
router.put("/:id", auth, upload.single("url_image"), updateController.update);
router.delete("/:id", auth, deleteController.delete);

module.exports = router;
