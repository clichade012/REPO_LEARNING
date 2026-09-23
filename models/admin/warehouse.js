const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    contactPersonName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    warehouseName: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    pinCode: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
  }, { timestamps: true });
  

module.exports = mongoose.model('Warehouse', warehouseSchema);
