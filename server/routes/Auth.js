const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

router.post("/register", async (req, res) => {
  console.log("Received register data:", req.body);
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ name, email, password: hash });
    res.json({ message: "Signed in successfully." });
  } catch (error) {
    res.status(400).json({ message: "The user already exists." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ message: "User Not Found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(401).json({ message: "Your password is incorrect." });

  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ message: "Logged in successfully.", token, user });
});

router.post("/verifyemail", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ message: "User Not Found" });

  res.json({ message: "Valid Email!!!", email });
});

router.post("/resetpassword", async (req, res) => {
  const { email, newPassword } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ message: "User Not Found" });

  const hashPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashPassword;
  await user.save();

  res.status(200).json({ message: "Update Password Successfully!!!" });
});

module.exports = router;
