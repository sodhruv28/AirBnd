const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");
const dumpedData = require("../../scratch/dumped_data.json");

// Default initial listings from reference dataset
const mockListings = dumpedData.or.map((item, idx) => ({
  ...item,
  isFavourite: idx < 3,
  badge: idx % 3 === 0 ? "Guest favourite" : (idx % 2 === 0 ? "Rare find" : undefined),
  nights: 2,
}));

// GET /api/listings
router.get("/", async (req, res) => {
  try {
    const { location, category } = req.query;

    // If MongoDB is connected and has records, fetch from DB
    if (Listing.db && Listing.db.readyState === 1) {
      const query = {};
      if (location) {
        query.location = { $regex: location, $options: "i" };
      }
      if (category) {
        query.category = category;
      }
      const listings = await Listing.find(query);
      if (listings.length > 0) {
        return res.json({ success: true, count: listings.length, data: listings });
      }
    }

    // Fallback to mock data
    let results = [...mockListings];
    if (location) {
      results = results.filter((l) =>
        l.location.toLowerCase().includes(location.toLowerCase()) ||
        l.title.toLowerCase().includes(location.toLowerCase())
      );
    }
    if (category) {
      results = results.filter((l) => l.category === category);
    }

    res.json({ success: true, count: results.length, data: results });
  } catch (err) {
    console.error("Error fetching listings:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/listings/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (Listing.db && Listing.db.readyState === 1) {
      const listing = await Listing.findById(id).catch(() => null);
      if (listing) return res.json({ success: true, data: listing });
    }

    const listing = mockListings.find((l) => String(l.id) === String(id));
    if (!listing) {
      return res.status(404).json({ success: false, message: "Listing not found" });
    }
    res.json({ success: true, data: listing });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
