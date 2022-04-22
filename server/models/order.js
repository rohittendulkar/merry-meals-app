const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		firstname: {
			type: String,
			required: [true, "first name required"],
		},
		lastname: {
			type: String,
			required: [true, "last name required"],
		},
		email: {
			type: String,
			required: [true, "email is required"],
		},
		userid: {
			type: String,
		},
		orderItems: [],
		deliveryAddress: {
			type: Object,
		},
		checkedForSafety: {
			type: Boolean,
			default: false,
		},
		isDelivered: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Orders = mongoose.model("Orders", orderSchema);

exports.Orders = Orders;
