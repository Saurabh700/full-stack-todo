const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: {
    type: String,
    require: true,
    enum: ["admin", "customer"],
    default: "customer",
  },
});

const UserModel = mongoose.model("todo-user", userSchema);

module.exports = {
  UserModel,
};
