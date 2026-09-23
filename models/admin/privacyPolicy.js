const mongoose = require('mongoose');

/**
 * Reusable function to create a model for different collections
 * @param {string} collectionName - The name of the MongoDB collection
 * @returns {mongoose.Model} - The Mongoose model for the collection
 */
const createPolicyModel = (collectionName) => {
  const PolicySchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model(collectionName, PolicySchema);
};

module.exports = createPolicyModel;
