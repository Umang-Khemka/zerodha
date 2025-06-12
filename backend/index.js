require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => res.send("API is running"));
app.use("/auth", require("./Routes/authRoutes"));
app.use("/holdings", require("./Routes/holdingsRoutes"));
app.use("/positions", require("./Routes/positionRoutes"));
app.use("/orders", require("./Routes/orderRoutes"));

// DB + Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
});
