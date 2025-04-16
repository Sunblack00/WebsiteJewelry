const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;

const authRouter = require("./routes/Auth");
const profileRouter = require("./routes/Profile");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch((err) => console.error("Lỗi MongoDB:", err));

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
