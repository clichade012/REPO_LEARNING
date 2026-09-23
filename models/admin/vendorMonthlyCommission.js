const mongoose = require("mongoose");

const SettlementHistorySchema = new mongoose.Schema(
  {
    settledBy: {
      type: String,
      enum: ["admin", "vendor","system"],
      required: false,
    },
    note: {
      type: String, 
    },
  },
  {   timestamps: true, _id: false }
);

const VendorMonthlyCommissionSchema = new mongoose.Schema(
  {
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    orders: [
      {
        _id: false,
        orderId: { type: String, required: true },
        orderAmount: { type: Number, required: true },
        paymentMethod: { type: String, required: true }
      }
    ],
    vendorTotalOrderValue: { type: Number, default: 0 },
    vendorTotalToCollect: { type: Number, default: 0 },
    vendorTotalToPay: { type: Number, default: 0 },
    vendorNetSettlement: { type: Number, default: 0 },
    adminTotalOrderValue: { type: Number, default: 0 },
    adminTotalToCollect: { type: Number, default: 0 },
    adminNetSettlement: { type: Number, default: 0 },
    vendorStatus: { type: String, enum: ["unsettled","request", "settled","balanced"], default: "unsettled" },
    adminStatus: { type: String, enum: ["unsettled", "request","settled","balanced"], default: "unsettled" },
    commissionPercent: {
      type: Number,
      default: 30
    },
     settlementHistory: [SettlementHistorySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("VendorMonthlyCommission", VendorMonthlyCommissionSchema);