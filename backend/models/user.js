const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  watchList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Show" }],
});

module.exports = mongoose.model("User", UserSchema);
