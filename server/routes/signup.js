const { Router } = require("express");

const signup = Router();

signup.post("/", (req, res) => {
  res.send("signup page");
});

module.exports = {
  signup,
};
