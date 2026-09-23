const mongoose = require('mongoose');

const FreeDealCouponSchema = new mongoose.Schema({
  couponCode: { type: String, required: true, unique: true },
  description: { type: String },
  isActive: { type: Boolean, default: true },
  minimumAmount: { type: Number, required: true },
  maximumAmount: { type: Number },
  applicableWhen: { 
    type: String, 
    enum: ['Order Value', 'Order Quantity'], 
    required: true 
  },
  minimumOrderValue: { type: Number, required: true },
  maximumOrderValue: { type: Number },
  minimumQuantity: { type: Number },

  applyOnWhich: { 
    type: String, 
    enum: ['All Products', 'Specific Products', 'Specific Category'], 
    required: true
  },
  getFree: { 
    type: String,
    enum: ['All Products', 'Specific Products', 'Specific Category'], 
    required: true 
  },
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", default: [] }],
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: [] }],

  sendToSpecificCustomer: { type: String, match: /^\S+@\S+\.\S+$/, default: null },
  usageLimitPerCustomer: { type: String, enum: ['Only Once', 'Unlimited', 'Custom'], required: true },
  maxCountOfCouponUsage: { type: String, enum: ['Only Once', 'Unlimited', 'Custom'], required: true },
  couponStatus: { type: Number, enum: [1, 2], default: 2 },
  showCouponToCustomer: { type: Boolean, default: false },
  validOnlyForOnlinePayments: { type: Boolean, default: false },
  validOnlyForFewCustomers: { type: Boolean, default: false },
  autoApplyCoupon: { type: Boolean, default: false },
  excludeSalesItem: { type: Boolean, default: false },

  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('FreeDealCoupon', FreeDealCouponSchema);
