const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    roleName: {
      type: String,
      required: true,
      unique: true,
    },
    permissions: [
      {
        module: {
          type: String,
          required: true,
          enum: [
            "products",
            "category",
            "inventory",
            "tags",
            "orders",
            "vendor",
            "users",
            "coupons & offers",
            "roles & permissions",
            "Dashboard",
            "Settings",
            "Finance",
            "Repair",
            "VendorDashboard",
            "CustomerReview"
          ],
        },
        add: { type: Boolean, default: false },
        view: { type: Boolean, default: false },
        update: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
    ],
    status: {
      type: Boolean,
      default: true, // Default to true (active)
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Role", roleSchema);
