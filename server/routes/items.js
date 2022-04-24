const express = require("express");
const _ = require("lodash");
const { Item } = require("../models/item");
const router = express.Router();

//GET MEAL ITEMS
router.get("/getItems", async (req, res) => {
	try {
		const items = await Item.find({});
		res.status(200).send(items);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

router.post("/postItems", async (req, res) => {
	console.log(req.body);
	let item = new Item({
		title: req.body.title,
		description: req.body.description,
		category: req.body.category,
		imageUrl: req.body.imageUrl,
		partner: req.body.partner,
	});
	console.log(item);

	try {
		await item.save();
		res.status(200).json({ success: true, message: "Item added Successfully" });
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

router.get("/:id", async (req, res) => {
	let items = await Item.find({ partner: req.params.id }).select("-__v");
	console.log(items);
	if (!items) return res.status(404).send("Items with given ID was not found");

	res.send(items);
});

module.exports = router;
