const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { ObjectId } = require("mongodb");
const role = require("../admin/role");

const userSchema = new mongoose.Schema({
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
  roleName: { type: String, required: true }, 
  roleId: { type: ObjectId, required: true, ref: "Role" }, 
  profileImage: { type: String },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date, default: null },
  createdBy: { type: ObjectId },
  otp: { type: String },          
    otpExpiry: { type: Date },
 
  deletedAt: { type: Number },
},{timestamps: true});


const User = mongoose.model("User", userSchema);
module.exports = User;

