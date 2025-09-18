const express = require("express");
const router = express.Router();
const logoutController = require("../../controllers/auth/logoutController");
const auth = require("../../middlewares/auth");

// Route protégée par le token
router.post("/logout", auth, logoutController.logout);

module.exports = router;
