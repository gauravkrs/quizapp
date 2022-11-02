const { Router } = require("express");
const admin = require("../models/adminModel");

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const admins = new admin({ name, email, password });
  admins.save().then(() => {
    res.status(201).send({ data: admins });
  });
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admins = await admin.findOne({ email });
  if (email === admins.email && password === admins.password) {
    res.status(200).send({ message: "login success", data: admins });
  } else {
    res.status(401).send({ message: "login fail" });
  }
});

module.exports = adminRouter;
