const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  status: { type: Boolean, require: true },
  count: { type: Number, require: true },
});

const TodoModel = mongoose.model("tododata", todoSchema);

module.exports = {
  TodoModel,
};
