const mongoose = require('mongoose');

const lensSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
   categories: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
      name: { type: String, required: true },
    },
  ],
  subcategories: [
  {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory", required: true },
    name: { type: String, required: true }
  }
],
subSubcategories: [
  {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "SubSubCategory", required: true },
    name: { type: String, required: true }
  }
],

  image: {
    type: String, // File path or URL to the image
    // required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Lens', lensSchema);
