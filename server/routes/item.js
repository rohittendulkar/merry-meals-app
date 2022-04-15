const express = require("express");
const _ = require("lodash");
const { Item } = require("../models/item");
const router = express.Router();

//GET MEAL ITEMS
router.get("/getItems", async (req, res) => {
	try {
		const items = await Item.find({});
		res.send(items);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
