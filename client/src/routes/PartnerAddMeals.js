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
import { useDispatch } from "react-redux";
import { partnerAction } from "../redux/action/partnerAction";

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

	const register = async (e) => {
		e.preventDefault();
		let partner = new FormData();

		partner.append("title", title);
		partner.append("description", description);
		partner.append("category", category);
		partner.append("imageUrl", imageUrl);

		dispatch(partnerAction(partner));
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
						<form encType="multipart/form-data" noValidate>
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
									onClick={register}
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
