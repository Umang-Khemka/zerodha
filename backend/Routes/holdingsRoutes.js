const express = require("express");
const router = express.Router();
const { getHoldings } = require("../controllers/holdingsController");
const verifyToken = require("../middlewares/authMiddleware");

router.get("/allHoldings", verifyToken, getHoldings);

module.exports = router;
