const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/auth/registerController");
const upload = require("../../middlewares/upload");

router.post("/register", upload.single("photo"), registerController.register);

module.exports = router;
