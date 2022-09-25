const express = require("express");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());

const { signup } = require("./routes/signup");
const { login } = require("./routes/login");
const { todos } = require("./routes/todos");

app.use("/signup", signup);
app.use("/login", login);
app.use("/todos", todos);

app.get("/", (req, res) => {
  res.send(
    "welcome to full stacked todo application »» available endPoints for GET / & /todos || for POST /signup & /login || for PATCH /todos/:id || for DELETE /todos/:id"
  );
});

app.listen(port, () => {
  console.log(`listening on PORT ${process.env.PORT}`);
});
