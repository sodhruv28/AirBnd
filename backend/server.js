require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const listingsRouter = require("./routes/listings");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/listings", listingsRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Connect to MongoDB Atlas if MONGO_URI provided
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.warn("MongoDB connection error (running with fallback mock data):", err.message));
} else {
  console.log("No MONGO_URI set, running with rich mock listings data.");
}

app.listen(PORT, () => {
  console.log(`Airbnb backend API server running on port ${PORT}`);
});
