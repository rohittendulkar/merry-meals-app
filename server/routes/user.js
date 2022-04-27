const express = require("express");
const _ = require("lodash");
const { User } = require("../models/users");
const { userStorage } = require("../multer-config");
const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
// const jwt = require("jsonwebtoken");

var upload = multer({ storage: userStorage });

router.post("/", upload.array("proof"), async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists");

  // user = new User(
  //   _.pick(req.body, [
  //     "firstName",
  //     "lastName",
  //     "gender",
  //     "birthDate",
  //     "address",
  //     "street",
  //     "locality",
  //     "zip",
  //     "phone",
  //     "email",
  //     "password",
  //     "files",
  //   ])
  // );

  let files = [];
  req.files.forEach((element) => {
    const file = {
      fileName: element.originalname,
    };
    files.push(file);
  });

  user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    birthDate: req.body.birthDate,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    street: req.body.street,
    locality: req.body.locality,
    zip: req.body.zip,
    phone: req.body.phone,
    proof: files,
  });

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
