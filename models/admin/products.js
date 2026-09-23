const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  price: { type: Number, required: true },

  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }],
  subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }],
  subSubcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubSubCategory" }],
  tagIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  coupons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Coupon", default: [] }],

  // ✅ Updated: Removed material field
  shipping: { 
    weight: { type: Number, required: true },
    lensSize: {
      width: { type: Number },
      height: { type: Number },
    },
    bridgeLength: { type: Number },
    temple: {
      length: { type: Number },
      material: { type: String },
      color: { type: String },
    },
  },

  // 👇 Existing inline variants structure
  variants: [
    {
      optionName: { type: String, required: true },
      description: { type: String },
      optionValues: [
        {
          _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
          value: { type: String, required: true }
        }
      ],
      price: { type: Number, required: true },
      discount: {
        type: { type: String },
        value: { type: Number },
        schedule: {
          from: { type: Date },
          to: { type: Date },
        },
      },
      sku: { type: String, required: true },
      manageStocks: { type: Boolean, default: false },
      quantity: { type: Number, min: 0, default: 0 },
      allowBackorder: {
        type: String,
        enum: ["Allow", "Allow but notify when out of stock", "Don’t Allow"],
      },
      stockStatus: {
        type: String,
        enum: ["In stock", "Out of stock"],
        required: true,
      },
      soldIndividually: { type: Boolean },
      shipping: {
        weight: { type: Number },
        material: { type: String },
        lensSize: {
          width: { type: Number },
          height: { type: Number },
        },
        bridgeLength: { type: Number },
        temple: {
          length: { type: Number },
          material: { type: String },
          color: { type: String },
        },
      },
      productGallery: [{ type: String }], 
     
    },
  ],

  // 👇 Referencing externally created variant documents
  variantIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Variant" }],

  discount: {
    type: { type: String },
    value: { type: Number },
    schedule: {
      from: { type: Date },
      to: { type: Date },
    },
  },
  sku: { type: String },
  manageStocks: { type: Boolean, default: false },
  quantity: { type: Number, min: 0, default: 0 },
  allowBackorder: {
    type: String,
    enum: ["Allow", "Allow but notify when out of stock", "Don’t Allow"],
  },
  stockStatus: {
    type: String,
    enum: ["In stock", "Out of stock"],
    required: true,
  },
  soldIndividually: { type: Boolean },
  shortDescription: { type: String },
  seoPageTitle: { type: String },
  seoDescription: { type: String },
  urlHandle: { type: String },
  productStatus: {
    productStatus: { type: Number, enum: [1, 2] },
    schedule: {
      startDate: { type: Date },
    },
  },
  productImage: { type: String },
  productGallery: [{ type: String }],

  // ✅ Updated: checkbox-style + custom collection
  collection: {
    mostPopular: { type: Boolean, default: false },
    latestAndGreatest: { type: Boolean, default: false },
    trendingProducts: { type: Boolean, default: false },
  },
  customCollection: { type: String }, // ✅ New field for 'other'
   bestseller: { type: String, default: '0' ,
    lowStockThreshold: { type: Number, default: 5 },
    }
},
{ suppressReservedKeysWarning: true ,timestamps: true});


module.exports = mongoose.model("Product", productSchema);