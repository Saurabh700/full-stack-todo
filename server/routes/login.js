const { Router } = require("express");

const login = Router();

login.get("/", (req, res) => {
  res.send("login");
});

module.exports = {
  login,
};
