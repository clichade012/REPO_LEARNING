const mongoose = require('mongoose');

const VendorStoreSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  addressLine1: { type: String, required: true },
  pincode: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  storeTiming: {
    sunday: { open: String, close: String, active: Boolean },
    monday: { open: String, close: String, active: Boolean },
    tuesday: { open: String, close: String, active: Boolean },
    wednesday: { open: String, close: String, active: Boolean },
    thursday: { open: String, close: String, active: Boolean },
    friday: { open: String, close: String, active: Boolean },
    saturday: { open: String, close: String, active: Boolean },
  },
  vendorId: { type: String, required: true },
  lat: { type: Number },
  long: { type: Number },
  placeId: { type: String },
  locationUrl: { type: String },
  contactNumber: {
    type: String
  },

  rating: {
    type: Number,
    default: 0
  },

  reviewCount: {
    type: Number,
    default: 0
  },

  services: [{
    type: String
  }],
  thumbnailImage: {
    type: String
  },
  storeImages: [{
    type: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('VendorStore', VendorStoreSchema);
