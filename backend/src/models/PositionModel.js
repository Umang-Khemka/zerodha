const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema.js");

const PositionModel = new model("position", PositionsSchema);

module.exports = { PositionModel };