const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		tags: {
			type: String,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: "Partner",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Item = mongoose.model("Item", itemSchema);

exports.Item = Item;
