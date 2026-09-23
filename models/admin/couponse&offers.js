const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  couponCode: { type: String, required: true, unique: true },
  description: { type: String },
  discountPercentage: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  minimumAmount: { type: Number, required: true },
  maximumAmount: { type: Number },
  applicableWhen: { type: String, enum: ['Order Value', 'Order Quantity'], required: true },
  minimumOrderValue: { type: Number }, // Only required if applicableWhen = 'Order Value'
  maximumOrderValue: { type: Number }, // Only required if applicableWhen = 'Order Value'
  minimumQuantity: { type: Number }, // Only required if applicableWhen = 'Order Quantity'
  
  applyOnWhich: { 
    type: String, 
    enum: ['All Products', 'Specific Products', 'Specific Category'], 
    required: true 
  },
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: [] }], // Required if Specific Products
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: [] }], // Required if Specific Category

  sendToSpecificCustomer: { type: String, match: /^\S+@\S+\.\S+$/, default: null },
  usageLimitPerCustomer: { type: String, enum: ['Only Once', 'Unlimited', 'Custom'], required: true },
  maxCountOfCouponUsage: { type: String, enum: ['Only Once', 'Unlimited', 'Custom'], required: true },
  couponStatus: { type: Number, enum: [1, 2], default: 2 }, // 1 for Active, 2 for Inactive
  showCouponToCustomer: { type: Boolean, default: false },
  validOnlyForOnlinePayments: { type: Boolean, default: false },
  validOnlyForFewCustomers: { type: Boolean, default: false },
  autoApplyCoupon: { type: Boolean, default: false },
  excludeSalesItem: { type: Boolean, default: false },
  
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date } // Optional, must be greater than startDateTime if provided
}, { timestamps: true });



module.exports = mongoose.model('Coupon', CouponSchema);