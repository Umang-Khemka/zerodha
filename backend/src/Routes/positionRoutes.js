const express = require("express");
const router = express.Router();
const { getPositions } = require("../controllers/positionController");
const verifyToken = require("../middlewares/authMiddleware");


router.get("/allPositions",verifyToken, getPositions);

module.exports = router;
