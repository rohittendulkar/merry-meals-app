const express = require("express");
const _ = require("lodash");
const { User } = require("../models/users");
const router = express.Router();
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists");
  // const {
  // 	firstName,
  // 	lastName,
  // 	gender,
  // 	birthDate,
  // 	address,
  // 	street,
  // 	locality,
  // 	zip,
  // 	phone,
  // 	email,
  // 	password,
  // 	fileUpload,
  // } = req.body;
  user = new User(
    _.pick(
      req.body,
      [
        "firstName",
        "lastName",
        "gender",
        "birthDate",
        "address",
        "street",
        "locality",
        "zip",
        "phone",
        "email",
        "password",
        "fileUpload",
      ]
      // {
      // 	firstName,
      // 	lastName,
      // 	gender,
      // 	birthDate,
      // 	address,
      // 	street,
      // 	locality,
      // 	zip,
      // 	phone,
      // 	email,
      // 	password,
      // 	fileUpload,
      // }
    )
  );

  console.log(user);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  try {
    await user.save();
    res.status(200).json({ success: true, message: "Register Success" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
