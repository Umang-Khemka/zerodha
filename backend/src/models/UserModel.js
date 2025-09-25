const { model } = require("mongoose");
const { userSchema } = require("../schemas/UserSchema");

const userModel = model("user", userSchema);

module.exports = { userModel };
