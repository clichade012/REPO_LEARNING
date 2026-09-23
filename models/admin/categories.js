const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema(
//   {
//     categoryImage: { type: String, default: null },
//     categoryName: { type: String, required: true },
//     description: { type: String, default: '' },
//     status: { type: Number, enum: [1, 2], default: 1 }, // 1 for active, 2 for inactive
//     isActive: { type: Boolean, default: false },
//     subcategories: [
//       {
//         subcategoryName: { type: String, required: true },
//         description: { type: String, default: '' },
//         isActive: { type: Boolean, default: false },
//         status: { type: Number, enum: [1, 2], default: 1 }, 
//         subcategoryImage: { type: String, default: null },
//         createdAt: { type: Date, default: Date.now }
//       }
//     ]
//   },
//   { timestamps: true }
// );


const categorySchema = new mongoose.Schema(
  {
    categoryImage: { type: String, default: null },
    categoryName: { type: String, required: true },
    description: { type: String, default: '' },
    status: { type: Number, enum: [1, 2], default: 1 }, // 1 for active, 2 for inactive
    isActive: { type: Boolean, default: false },
    coupons: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon', default: [] }
    ], // Coupons applicable to this category

    subcategories: [
      {
        subcategoryName: { type: String, required: true },
        description: { type: String, default: '' },
        // isActive: { type: Boolean, default: false },
        // status: { type: Number, enum: [1, 2], default: 1 },
        subcategoryImage: { type: String, default: null },
        createdAt: { type: Date, default: Date.now },

        // Sub-subcategories embedded inside subcategories
        subSubcategories: [
          {
            subSubcategoryName: { type: String, required: true },
            description: { type: String, default: '' },
            // isActive: { type: Boolean, default: false },
            // status: { type: Number, enum: [1, 2], default: 1 },
            subSubcategoryImage: { type: String, default: null },
            createdAt: { type: Date, default: Date.now }
          }
        ]
      }
    ]
  },
  { timestamps: true }
);



module.exports = mongoose.model('Category', categorySchema);
