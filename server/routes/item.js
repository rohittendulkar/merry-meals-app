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
	let item = new Item(
		_.pick(req.body, ["title", "description", "category", "imageUrl"])
	);
	console.log(item);

	try {
		await item.save();
		res.status(200).json({ success: true, message: "Item added Successfully" });
	} catch (error) {
		res.status(400).json({ message: error });
	}
});
module.exports = router;
