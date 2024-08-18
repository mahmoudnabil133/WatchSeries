const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  userName: { required: true, type: String },
  email: { required: true, type: String },
  password: { required: true, type: String },
  watchList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Show" }],
});

module.exports = mongoose.model("User", UserSchema);
