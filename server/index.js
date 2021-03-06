const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./routes/user");
const auth = require("./routes/auth");
const item = require("./routes/items");
const orders = require("./routes/orders");
const partner = require("./routes/partner");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

app.use("/uploads", express.static("uploads"));

app.use("/api/register", users);
app.use("/api/auth", auth);
app.use("/api/items", item);
app.use("/api/partners", partner);
app.use("/api/orders", orders);

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@merrymealsdb.7hwao.mongodb.net/merry-meals?retryWrites=true&w=majority`
	)
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(port, () =>
	console.log(`Merry Meals Server listening on port ${port}!`)
);
