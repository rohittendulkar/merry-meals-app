const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  isAdmin: {
    type: Boolean,
    default: false,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  gender: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  address: {
    type: String,
    required: true,
    maxlength: 500,
  },
  street: {
    type: String,
    required: true,
    maxlength: 500,
  },
  locality: {
    type: String,
    required: true,
    maxlength: 500,
  },
  zip: {
    type: Number,
    required: true,
    maxlength: 500,
  },
  phone: {
    type: Number,
    required: true,
    maxlength: 500,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  fileUpload: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 255,
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
