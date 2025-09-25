const { model } = require("mongoose");

const { PositionsSchema } = require("../src/schemas/PositionsSchema");

const PositionModel = new model("position", PositionsSchema);

module.exports = { PositionModel };