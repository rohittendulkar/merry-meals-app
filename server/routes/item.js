const express = require("express");
const { body } = require("express-validator");

const itemController = require("../controllers/itemController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post(
	"/create-item",
	auth.verifyPartner,
	[
		body("title", "Title needs to be at least 4 characters long")
			.trim()
			.isLength({ min: 4 }),
		body("description", "Description cannot be empty").trim().not().isEmpty(),
		body("price", "Price cannot be empty").trim().not().isEmpty(),
	],
	itemController.createItem
);

router.delete(
	"/delete-item/:itemId",
	auth.verifyPartner,
	itemController.deleteItem
);

router.put(
	"/edit-item/:itemId",
	auth.verifyPartner,
	[
		body("title", "Title needs to be at least 4 characters long")
			.trim()
			.isLength({ min: 4 }),
		body("description", "Description cannot be empty").trim().not().isEmpty(),
		body("price", "Price cannot be empty").trim().not().isEmpty(),
	],
	itemController.editItem
);

router.get("/get-items", auth.verifyPartner, itemController.getItems);

router.get("/get-item/:itemId", auth.verifyPartner, itemController.getItem);

module.exports = router;
