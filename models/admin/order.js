const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    customOrderId: {
      type: String,
      required: true,
      unique: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        lensId:{
          type: mongoose.Schema.Types.ObjectId,
          required: false,
        },
        userPowerId:{
          type: mongoose.Schema.Types.ObjectId,
          required: false,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    refundDetails: {
      bankId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
      },
      refundAmount: {
        type: Number,
        required: false
      },
      refundStatus: {
        type: String,
        enum: ["pending", "processing", "completed", "failed"],
        default: "pending"
      },
      refundInitiatedBy: {
        type: String,
        enum: ["system", "admin", "user"],
        default: "system" 
      },
      transactionId: {
        type: String,
        default: null
      },
      failureReason: {
        type: String,
        default: null
      },
      requestedAt: {
        type: Date,
        default: Date.now
      },
      refundedAt: {
        type: Date
      }
    }, 
    billDetails: {
      totalMRP: { type: Number, required: function () { return this.orderType === 'product'; } },
      totalDiscount: { type: Number, default: 0 },
      subtotal: { type: Number, required: function () { return this.orderType === 'product'; } },
      taxAmount: { type: Number, required: function () { return this.orderType === 'product'; } },
      totalPayable: { type: Number, required: function () { return this.orderType === 'product'; } },
      taxRatePercent: { type: Number, required: function () { return this.orderType === 'product'; } },
    }, couponCode: { type: String, default: null },
    couponType: { type: String, default: null },
    paymentMethod: {
      type: String,
      enum: ["COD", "ONLINE", "WALLET", "UPI"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "refunded"],
      default: "unpaid"
    },
    paymentDate: {
      type: Date,
      default: null
    },
    paymentReference: {
      type: String,
      default: null
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled", "cancel_requested", "repair_in_progress","return_requested", "repair_confirmed" , "return_pickup","returned","refunded"],
      default: "pending",
    },
    cancelledAt: { type: Date, default: null },
    cancelledBy: { type: String },
    cancelReason: { type: String, default: null },
    shippingDetails: {
      shippingCarrier: { type: String, default: null },
      fulfilledAt: { type: Date, default: null },
      isFulfilled: { type: Boolean, default: false },
    },
    trackingStatus: {
      type: String,
      enum: ["Processing", "Shipped", "Out for Delivery", "Delivered", "Returned", "Ordered", "Return_Pickup","Return_Requested"],
      default: "Processing",
    },
    orderType: {
      type: String,
      enum: ["product", "repair"],
      default: "product",
    },
    itemName: { type: String, default: null },
    issueDescription: { type: String, default: null },
    repairImages: { type: [String], default: [] },
    appointmentDate: { type: Date, default: null },
    repairPrice: { type: String, default: null },
  }, {
  timestamps: true
}

);


const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;