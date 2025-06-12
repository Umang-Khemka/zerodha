const express = require("express");
const router = express.Router();
const { signup, login, logout } = require("../controllers/authController");
const validateRequest = require("../middlewares/validateRequest");
const verifyToken = require("../middlewares/authMiddleware");
const { signupSchema, loginSchema } = require("../schemas/authSchema");

router.post("/signup", validateRequest(signupSchema), signup);
router.post("/login", validateRequest(loginSchema), login);
router.post("/logout", verifyToken, logout);

module.exports = router;
