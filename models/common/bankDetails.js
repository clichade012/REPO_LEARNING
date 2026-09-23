const mongoose = require("mongoose");

const bankDetailSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accountHolderName: {
      type: String,
      required: true,
      trim: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    confirmAccountNumber: {
      type: String,
      required: true
      },
    accountType: {
      type: String,
      enum: ["Savings", "Current", "Other"],
      required: true,
    },
    ifscCode: {
      type: String,
      required: true,
      uppercase: true,
    },
    branchName: {
      type: String,
      required: true,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const BankDetail = mongoose.model("BankDetail", bankDetailSchema);
module.exports = BankDetail;
