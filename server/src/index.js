const express = require("express");
const cors = require("cors");
require("dotenv").config();
const DBconnect = require("./config/dbConnection")

const app = express();
app.use(cors());
app.use(express.json());
DBconnect()

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
