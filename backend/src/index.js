require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Root route
app.get("/", (req, res) => res.send("API is running"));

// Versioned API routes
app.use("/api/v1/auth", require("./Routes/authRoutes"));
app.use("/api/v1/holdings", require("./Routes/holdingsRoutes"));
app.use("/api/v1/positions", require("./Routes/positionRoutes"));
app.use("/api/v1/orders", require("./Routes/orderRoutes"));

// Serve frontend in production
// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
}


// Connect DB + Start server
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
