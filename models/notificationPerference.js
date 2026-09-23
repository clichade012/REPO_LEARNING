  const mongoose = require('mongoose')

  const notificationPreferenceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    portalType: { type: String, enum: ["Admin", "Vendor", "User"], required: true },
    orderNew: { type: Boolean, default: true },
    orderStatusUpdate: { type: Boolean, default: true },
    orderDelay: { type: Boolean, default: false },
    inventoryLowStock: { type: Boolean, default: true },
    inventoryOutOfStock: { type: Boolean, default: true },
    inventoryRestocked: { type: Boolean, default: false },
    orderCancelRequest: { type: Boolean, default: true },
    returnExchangeRequest: { type: Boolean, default: true },
    discountAlerts: { type: Boolean, default: false },
    restockDiscount: { type: Boolean, default: false },
    roleChange: { type: Boolean, default: true },
    integrationFailure: { type: Boolean, default: true },
    vendorCommissionPending: { type: Boolean, default: true },
    repairOrderCreated: { type: Boolean, default: true },
    commissionSettled: { type: Boolean, default: true }
  }, { timestamps: true });


  const notificationPreference = mongoose.model("NotificationPreference", notificationPreferenceSchema);

  module.exports = notificationPreference