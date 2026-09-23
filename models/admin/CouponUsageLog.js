const mongoose = require("mongoose");

const couponUsageLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  couponCode: {
    type: String,
    required: true,
  },
  couponType: {
    type: String,
    enum: ["Freebie", "Percentage", "Flat"],
    required: true,
  },
  originalSubtotal: Number,
  discountAmount: Number,
  finalTotal: Number,
  appliedAt: {
    type: Date,
    default: Date.now,
  },
  extraInfo: mongoose.Schema.Types.Mixed, // for free products or categories etc.
});

module.exports = mongoose.model("CouponUsageLog", couponUsageLogSchema);
