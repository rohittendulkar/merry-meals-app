const express = require("express");
const { Partner } = require("../models/partners");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  let partner = Partner.findOne({ email: req.body.email });
  if (partner) return res.status(400).send("Partner already exists");

  partner = new Partner({
    partnerName: req.body.partnerName,
    tags: req.body.tags,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    street: req.body.street,
    locality: req.body.locality,
    zip: req.body.zip,
    phone: req.body.phone,
    pictures: req.files.map((file) => file.path),
  });

  const salt = await bcrypt.genSalt(10);
  partner.password = await bcrypt.hash(partner.password, salt);

  try {
    await partner.save();
    res.status(200).json({ success: true, message: "Register Success" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
