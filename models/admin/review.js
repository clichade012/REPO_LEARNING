const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: [String], 
    default: [],
  },
  status: {
    type: String,
    enum: ["active", "inactive"], 
    default: "inactive",
  },
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);