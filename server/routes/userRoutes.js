const { Router } = require("express");
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { name, username, email, password } = req.body;
  const users = await user.findOne({ username });
  if (users) {
    res.status(401).send({ message: "username already exists" });
  } else {
    const newUsers = new user({ name, username, email, password });
    newUsers.save().then(() => {
      res.status(201).send({ data: newUsers });
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = await user.findOne({ username });
  if (username === users.username && password === users.password) {
    const token = jwt.sign(
      { name: users.name, username: users.username },
      "quiz4568",
      { expiresIn: "2h" }
    );
    res.status(200).send({ message: "login successful", token });
  }
});

module.exports = userRouter;
