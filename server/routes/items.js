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

router.post("/:id", async (req, res) => {
	let item = await Item.findByIdAndUpdate(
		req.params.id,
		_.pick(req.body, [
			"title",
			"description",
			"category",
			"imageUrl",
			"partner",
		])
	);

	if (!item) res.status(404).json({ message: "Item not found" });

	res.status(200).json({ success: true, message: "Item Updated Successfully" });
});

router.get("/item/:id", async (req, res) => {
	let item = await Item.findById(req.params.id);
	if (!item)
		res.status(404).json({ message: "Item with given ID was not found" });

	console.log(item);

	res.status(200).send(item);
});

router.delete("/:id", async (req, res) => {
	let item = await Item.findByIdAndDelete(req.params.id);

	if (!item) res.status(404).json({ message: "Item with given ID not found" });
	res
		.status(200)
		.json({ success: true, message: "Item was deleted successfully" });
});

module.exports = router;
