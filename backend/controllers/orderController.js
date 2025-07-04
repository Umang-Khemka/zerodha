const { OrdersModel } = require("../models/OrdersModel");
const { HoldingsModel } = require("../models/HoldingsModel");

exports.createOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const userId = req.user._id;

    const newOrder = new OrdersModel({ name, qty, price, mode, userId });
    await newOrder.save();

    const existing = await HoldingsModel.findOne({ name, userId });

    if (mode === "BUY") {
      if (!existing) {
        const ltp = +(price * (1 + (Math.random() * 0.1 - 0.05))).toFixed(2);
        const netChange = +(((ltp - price) / price) * 100).toFixed(2);
        const net = (netChange >= 0 ? "+" : "") + netChange.toFixed(2) + "%";
        const dayChange = +(Math.random() * 4 - 2).toFixed(2);
        const day = (dayChange >= 0 ? "+" : "") + dayChange.toFixed(2) + "%";

        const newHolding = new HoldingsModel({
          userId,
          name,
          qty,
          avg: price,
          price: ltp,
          net,
          day,
        });

        await newHolding.save();
      } else {
        const totalCost = existing.avg * existing.qty + price * qty;
        const totalQty = existing.qty + qty;
        existing.qty = totalQty;
        existing.avg = totalCost / totalQty;

        const updatedLtp = +(existing.avg * (1 + (Math.random() * 0.1 - 0.05))).toFixed(2);
        const updatedNet = +(((updatedLtp - existing.avg) / existing.avg) * 100).toFixed(2);
        const net = (updatedNet >= 0 ? "+" : "") + updatedNet.toFixed(2) + "%";
        const dayChange = +(Math.random() * 4 - 2).toFixed(2);
        const day = (dayChange >= 0 ? "+" : "") + dayChange.toFixed(2) + "%";

        existing.price = updatedLtp;
        existing.net = net;
        existing.day = day;

        await existing.save();
      }
    } else if (mode === "SELL") {
      if (!existing || existing.qty < qty) {
        return res.status(400).json({ message: "Not enough quantity to sell" });
      }

      existing.qty -= qty;
      if (existing.qty === 0) {
        await HoldingsModel.deleteOne({ _id: existing._id });
      } else {
        await existing.save();
      }
    }

    res.json({ message: "Order saved and holdings updated" });
  } catch (err) {
    console.error("Error processing order:", err);
    res.status(500).json({ message: "Error processing order" });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const orders = await OrdersModel.find({ userId });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Error fetching orders" });
  }
};
