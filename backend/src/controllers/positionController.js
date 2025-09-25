const { PositionModel } = require("../models/PositionModel");

exports.getPositions = async (req, res) => {
  try {
    const userId = req.user._id; // ✅ Get user from token (middleware)
    const positions = await PositionModel.find({ userId }); // ✅ Filter by user
    res.json(positions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ message: "Error fetching positions" });
  }
};
