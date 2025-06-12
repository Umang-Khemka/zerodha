const { PositionModel } = require("../models/PositionModel");

exports.getPositions = async (req, res) => {
  try {
    const positions = await PositionModel.find({});
    res.json(positions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ message: "Error fetching positions" });
  }
};
