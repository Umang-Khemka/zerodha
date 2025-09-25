const { HoldingsModel } = require("../models/HoldingsModel");

exports.getHoldings = async (req, res) => {
  try {
    const userId = req.user._id;
    const holdings = await HoldingsModel.find({ userId });
    res.json(holdings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ message: "Error fetching holdings" });
  }
};
