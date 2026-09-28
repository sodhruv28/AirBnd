const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, default: "beachfront" },
    type: { type: String, default: "Entire condominium" },
    rating: { type: Number, default: 4.95 },
    reviewsCount: { type: Number, default: 0 },
    price: { type: Number, required: true },
    nights: { type: Number, default: 2 },
    guests: { type: Number, default: 2 },
    bedrooms: { type: Number, default: 1 },
    beds: { type: Number, default: 1 },
    bathrooms: { type: Number, default: 1 },
    images: [{ type: String }],
    description: { type: String },
    isFavourite: { type: Boolean, default: false },
    badge: { type: String },
    host: {
      name: { type: String, default: "Rahul" },
      avatar: { type: String, default: "https://i.pravatar.cc/150?img=11" },
      joiningDate: { type: String, default: "June 2021" },
      isSuperhost: { type: Boolean, default: true },
      responseRate: { type: String, default: "100%" },
      responseTime: { type: String, default: "within an hour" },
    },
    amenities: [
      {
        name: String,
        icon: String,
      },
    ],
    reviews: [
      {
        id: Number,
        author: String,
        avatar: String,
        date: String,
        comment: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", listingSchema);
