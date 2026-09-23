const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Vendor Schema
const vendorSchema = new mongoose.Schema(
  {
    isActive: { type: Boolean, default: true },
    status: { type: Number, enum: [1, 2], default: 1 },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, // 10-digit mobile number validation
    },
    additionalNumber: {
      type: String,
      match: /^[0-9]{10}$/, // Optional 10-digit mobile number validation
      default: null,
    },
    store: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      location: {
        type: String,
        trim: true,
        default: null,
      },
      pincode: {
        type: String,
        match: /^[0-9]{5,6}$/, // Allow 5 or 6 digits
        default: null,
      },
      city: {
        type: String,
        trim: true,
        default: null,
      },
      state: {
        type: String,
        trim: true,
        default: null,
      },
    },
    profilePhoto: {
      type: String, // URL or path to the uploaded photo
      default: null,
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Minimum password length
      select: false, // Do not include password in queries by default
    },
    supportAndsocialLinks: {
    facebookUrl: { type: String },
    instagramUrl: { type: String },
    youtubeUrl: { type: String },
    twitterUrl: { type: String },
    linkedinUrl: { type: String },
    pinterestUrl: { type: String },
  
  },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
  
);

// Hash password before saving
vendorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip if password is not modified
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // Hash the password
  next();
});

// Compare entered password with hashed password
vendorSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create Vendor Model
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
