const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
     title: { type: String, required: true },
  type: {
        type: String,
        enum: [
            "orderNew", 
            "orderStatusUpdate", 
            "orderDelay", 
            "inventoryLowStock", 
            "inventoryOutOfStock",
            "inventoryRestocked", 
            "orderCancelRequest", 
            "returnExchangeRequest",
            "discountAlerts", 
            "restockDiscount", 
            "roleChange", 
            "integrationFailure",
            "vendorCommissionPending",
            "repairOrderCreated",
            "commissionSettled",
            "returnRequest"
        ],
        required: true
    },
    senderId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
     recipients: [
        {
            userId: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: "User", 
                required: true
            },
            
            portalType: { 
                type: String, 
                enum: ["Admin", "Vendor", "User"], 
                required: true 
            },

            isRead: { 
                type: Boolean, 
                default: false 
            },
           message: { type: String, required: true },
            _id: false 
        }
    ],
},{ timestamps: true });

const NotificationModel = mongoose.model("dailynotifications", notificationSchema);

module.exports = NotificationModel;

