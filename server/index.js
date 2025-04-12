const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 1361;
const SECRET_KEY = "22691361";

const authRouter = require("./routes/Auth");
const profileRouter = require("./routes/Profile");

mongoose.connect("mongodb://127.0.0.1:27017/jewelry-auth");

app.use(cors());
app.use(bodyParser.json());

app.use("/api", authRouter);
app.use("/api/profile", profileRouter);

app.get("/", (req, res) => {
  res.send("API dang hoat dong");
});

app.listen(PORT, () => {
  console.log(`Server dang chay tai: http://localhost:${PORT}`);
});
