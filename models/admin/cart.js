const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      lensProductId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 },
      selectedSubSubcategories: [
        {
          subSubcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubSubcategory', required: true },
          subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory', required: true },
          categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
        }
      ],
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
