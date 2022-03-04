const express = require("express");
const { User } = require("../models/users");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
	let user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Invalid email and password");

	let password = await bcrypt.compare(req.body.password, user.password);
	if (!password) res.status(400).send("Invalid email and password");

	const token = jwt.sign({ _id: user._id }, "jwtPrivateKey");

	res.send(token);
});

module.exports = router;
