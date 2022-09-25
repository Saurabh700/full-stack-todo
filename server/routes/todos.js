const { Router } = require("express");

const todos = Router();

todos.get("/", (req, res) => {
  res.send("todos page");
});

module.exports = {
  todos,
};
