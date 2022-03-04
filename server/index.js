const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./routes/user");
const auth = require("./routes/auth");

const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/register", users);
app.use("/api/auth", auth);

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@merrymealsdb.7hwao.mongodb.net/merry-meals?retryWrites=true&w=majority`
	)
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(port, () =>
	console.log(`Merry Meals Server listening on port ${port}!`)
);
