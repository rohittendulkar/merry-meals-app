const express = require("express");
const router = express.Router();
const { Orders } = require("../models/order");

router.post("/placeorder", async (req, res) => {
	const { currentUser, cartItems } = req.body;
	try {
		const newOrder = new Orders({
			firstname: currentUser.user.firstName,
			lastname: currentUser.user.lastName,
			email: currentUser.user.email,
			userid: currentUser.user._id,
			partner: cartItems[0].partner,
			orderItems: cartItems,
			deliveryAddress: {
				address: currentUser.user.address,
				street: currentUser.user.street,
				locality: currentUser.user.locality,
				zip: currentUser.user.zip,
			},
		});
		newOrder.save();
		res.send("Order Placed Successfully");
		console.log(newOrder);
	} catch (error) {
		res.status(400).json({
			message: "Something went wrong",
			error: error.stack,
		});
	}
});

router.post("/getuserorders", async (req, res) => {
	const { userid } = req.body;
	try {
		const orders = await Orders.find({ userid }).sort({ _id: "-1" });
		res.status(200).send(orders);
	} catch (error) {
		res.status(400).json({
			message: "Something Went Wrong",
			error: error.stack,
		});
	}
});

router.get("/:id", async (req, res) => {
	let orders = await Orders.find({ partner: req.params.id }).select("-__v");
	console.log(req.params.id);
	if (!orders) return res.status(404).send("Order with given ID was not found");

	res.send(orders);
});

router.post("/ordersafety", async (req, res) => {
	const orderid = req.body.orderid;
	try {
		const order = await Orders.findOne({ _id: orderid });
		order.checkedForSafety = true;
		await order.save();
		res.status(200).send("Order checked for safety");
	} catch (error) {
		res.status(400).json({
			message: "Something Went Wrong",
			error: error.stack,
		});
	}
});
router.post("/deliverorder", async (req, res) => {
	const orderid = req.body.orderid;
	try {
		const order = await Orders.findOne({ _id: orderid });
		order.isDelivered = true;
		await order.save();
		res.status(200).send("Order delivered successfully");
	} catch (error) {
		res.status(400).json({
			message: "Something Went Wrong",
			error: error.stack,
		});
	}
});
module.exports = router;
