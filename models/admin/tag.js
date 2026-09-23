const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  tagName: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate slugs
  },
  description: {
    type: String,
    default: '', // Optional field
  },
}, { timestamps: true });

const tagModel = mongoose.model('Tag', tagSchema);
module.exports = tagModel
