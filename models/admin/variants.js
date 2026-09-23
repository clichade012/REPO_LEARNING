// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const variantSchema = new Schema({
//   optionName: { type: String, required: true },
//   description: { type: String },
//   optionValues: [
//     {
//       value: { type: String, required: true }
//     }
//   ],
//   price: { type: Number },
//   sku: { type: String },
//   discount: { type: Number },
//   manageStocks: { type: Boolean },
//   quantity: { type: Number },
//   allowBackorder: { type: Boolean },
//   stockStatus: { type: String },
//   soldIndividually: { type: Boolean },
//   shipping: {
//     weight: { type: String },
//     dimensions: { type: String }
//   },
//   productGallery: { type: [String] }
// });

// const Variant = mongoose.model('Variant', variantSchema);
// module.exports = Variant;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define optionValues schema
const optionValueSchema = new Schema({
  optionName: { type: String, required: true },  // e.g., "Color", "Size"
  value: { type: String, required: true }        // e.g., "Black", "Large"
}, { _id: false }); // Prevent automatic _id in subdocument

// Main Variant schema
const variantSchema = new Schema({
  description: { type: String },
  optionValues: [optionValueSchema], // replaces optionName + optionValues
  price: { type: Number },
  sku: { type: String },
 discount: {
  type: {
    type: String,
    enum: ["percentage", "fixed"]
  },
  value: Number,
  schedule: { from: Date, to: Date }
},
  manageStocks: { type: Boolean },
  quantity: { type: Number },
  allowBackorder: { type: String },
  stockStatus: { type: String },
  soldIndividually: { type: Boolean },
  shipping: {
    weight: { type: Number }, 
    material: { type: String },
    lensSize: {
      width: { type: Number },
      height: { type: Number }
    },
    bridgeLength: { type: Number },
    temple: {
      length: { type: Number },
      material: { type: String },
      color: { type: String }
    }
  },
  productGallery: { type: [String] },
  variantImage: { type: String } 
});

const Variant = mongoose.model('Variant', variantSchema);
module.exports = Variant;
