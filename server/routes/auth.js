const express = require("express");
const { User } = require("../models/users");
const { Partner } = require("../models/partners");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
	let user = await User.findOne({ email: req.body.email });
	let partner = await Partner.findOne({ email: req.body.email });
	if (!user && !partner)
		return res.status(400).send("Invalid email and password");

	let userPass;
	let partnerPass;
	if (user) {
		userPass = await bcrypt.compare(req.body.password, user.password);
	} else if (partner) {
		partnerPass = await bcrypt.compare(req.body.password, partner.password);
	}

	if (!userPass && !partnerPass)
		res.status(400).send("Invalid email and password");

	try {
		if (userPass) {
			const token = jwt.sign({ user }, "akhil2001");
			res.send(token);
		} else if (partnerPass) {
			const pToken = jwt.sign({ partner }, "akhil2001");
			res.send(pToken);
		}
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

module.exports = router;
