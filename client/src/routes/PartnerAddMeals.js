import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
	Button,
	FormControl,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postItems } from "../redux/action/itemAction";

const useStyles = makeStyles((theme) => ({
	form: {
		textAlign: "center",
		marginBottom: theme.spacing(10),
		marginTop: theme.spacing(10),
	},
	textField: {
		margin: 10,
	},
	title: {
		margin: "48px 0px 10px 0px",
	},
	alignLeft: {
		textAlign: "left",
	},
	paper: {
		padding: theme.spacing(2),
	},
}));
const PartnerAddMeals = () => {
	const classes = useStyles();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const dispatch = useDispatch();
	const partnerState = useSelector((state) => state.loginReducer.currentUser);
	const { partner: partnerData } = partnerState;

	const partner = partnerData._id;

	const addMeal = async (e) => {
		e.preventDefault();
		// let meal = new FormData();

		// meal.append("title", title);
		// meal.append("description", description);
		// meal.append("category", category);
		// meal.append("imageUrl", imageUrl);
		// meal.append("partner", partner._id);

		// console.log(meal.get("partner"));

		let meal = {
			title,
			description,
			category,
			imageUrl,
			partner,
		};
		dispatch(postItems(meal));
	};

	return (
		<div style={{ display: "block" }}>
			<Grid container className={classes.form}>
				<Grid item>
					<Paper sx={{ pr: 2 }}>
						<Typography variant="h4" className={classes.title}>
							Add New Meal
						</Typography>
						<br />
						<form noValidate>
							<FormControl fullWidth sx={{ m: 1 }}>
								<TextField
									id="title"
									name="title"
									label="Meal Title"
									onChange={(e) => setTitle(e.target.value)}
									value={title}
									className={classes.textField}
									fullWidth
									required
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }}>
								<TextField
									id="description"
									name="description"
									label="Meal Description"
									onChange={(e) => setDescription(e.target.value)}
									value={description}
									className={classes.textField}
									fullWidth
									required
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }}>
								<TextField
									id="category"
									name="category"
									label="Category"
									onChange={(e) => setCategory(e.target.value)}
									value={category}
									className={classes.textField}
									fullWidth
									required
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }}>
								<TextField
									id="imageUrl"
									name="imageUrl"
									label="Image Link"
									onChange={(e) => setImageUrl(e.target.value)}
									value={imageUrl}
									className={classes.textField}
									fullWidth
									required
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }}>
								<Button
									variant="contained"
									color="success"
									className={classes.button}
									onClick={addMeal}
								>
									Add Meal
								</Button>
							</FormControl>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default PartnerAddMeals;
