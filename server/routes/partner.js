const express = require("express");
const bcrypt = require("bcrypt");
const multer = require("multer");
const { partnerStorage } = require("../multer-config");
const { Partner } = require("../models/partners");
const router = express.Router();

var upload = multer({ storage: partnerStorage });

router.post("/register", upload.array("pictures"), async (req, res, next) => {
	let files = [];
	req.files.forEach((element) => {
		const file = {
			fileName: element.originalname,
		};
		files.push(file);
	});
	const partner = new Partner({
		partnerName: req.body.partnerName,
		tags: req.body.tags,
		email: req.body.email,
		password: req.body.password,
		address: req.body.address,
		street: req.body.street,
		locality: req.body.locality,
		zip: req.body.zip,
		phone: req.body.phone,
		pictures: files,
	});

	const salt = await bcrypt.genSalt(10);
	partner.password = await bcrypt.hash(partner.password, salt);

	try {
		await partner.save();
		res.status(200).json({ success: true, message: "Partner Registered" });
	} catch (error) {
		res.status(400).json({ message: error });
		console.log(error.message);
	}
});

router.get("/", async (req, res) => {
	let partner = await Partner.find().select("-__v").sort("name");
	res.send(partner);
});

module.exports = router;
