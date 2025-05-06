const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { route } = require("./Auth");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

//Kiem tra token
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("Received token:", token);

  if (!token) return res.status(401).json({ message: "Token khong ton tai" });
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Decoded token:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token khong hop le" });
  }
}

router.get("/", verifyToken, (req, res) => {
  res.json({ message: "Truy cap profile thanh cong", user: req.user });
});

module.exports = router;
