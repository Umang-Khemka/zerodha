const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controllers/orderController");
const verifyToken = require("../middlewares/authMiddleware");

router.post("/", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

module.exports = router;
