const mongoose = require("mongoose");

const partners = new mongoose.Schema({
  partnerName: {
    type: String,
    required: true,
  },
  tags: {
    type: "String",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
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
  pictures: {
    type: String,
    required: false,
  },
});

const Partner = mongoose.model("Partner", partners);

exports.Partner = Partner;
