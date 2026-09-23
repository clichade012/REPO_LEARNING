const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { ObjectId } = require("mongodb");
const role = require("./admin/role");

// const userSchema = new mongoose.Schema({
//   firstName: { type: String },
//   middleName: { type: String },
//   lastName: { type: String },
//   email: { type: String },
//   phone: { type: String },
//   phoneCountryCode: { type: String },
//   additionalNumber: { type: String },
//   joiningDate: { type: Date },
//   designation: { type: String },
//   description: { type: String },
//   password: { type: String, required: true }, 
//   resetPasswordToken: { type: String },
//   address: { type: String },
//   gender: { type: String },
//   dateOfBirth: { type: Date },
//   userRole: { type: Number },
//   roleName: { type: String, required: true }, 
//   roleId: { type: ObjectId, required: true, ref: "Role" }, 
//   profileImage: { type: String },
//   isDeleted: { type: Boolean, default: false },
//   deletedAt: { type: Date, default: null },
//   createdBy: { type: ObjectId },
//   createdAt: { type: String },
//   updatedAt: { type: Number },
//   deletedAt: { type: Number },
//   updatedAt: { type: Date },
// });

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    phoneCountryCode: { type: String },
    additionalNumber: { type: String },
    joiningDate: { type: Date },
    designation: { type: String },
    description: { type: String },
    password: { type: String, required: true }, 
    resetPasswordToken: { type: String },
    address: { type: String },
    gender: { type: String },
    dateOfBirth: { type: Date },
    userRole: { type: Number },
    roleName: { 
      type: String,
      required: function () { return this.roleId !== undefined; } // Required if roleId exists
    }, 
    roleId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Role",
      required: function () { return this.roleName !== undefined; } // Required if roleName exists
    }, 
    status: { type: Number, enum: [1, 2], default: 1 }, // 1 = Active, 2 = Inactive
    profileImage: { type: String },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    otp: { type: String },          
    otpExpiry: { type: Date },
    supportAndsocialLinks: {
    facebookUrl: { type: String },
    instagramUrl: { type: String },
    youtubeUrl: { type: String },
    twitterUrl: { type: String },
    linkedinUrl: { type: String },
    pinterestUrl: { type: String },
  
  },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    commissionPercent :{type: String, default: 30} 
  },
  { timestamps: true }, // Enables automatic createdAt and updatedAt fields
  
);

const User = mongoose.model("User", userSchema);
module.exports = User;

