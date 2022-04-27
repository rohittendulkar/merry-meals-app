import {
	Backdrop,
	Box,
	Button,
	Fade,
	FormControl,
	Modal,
	Paper,
	TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItems } from "../redux/action/itemAction";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

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

const MealPopup = ({ open, handleClose, partner, item }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		if (item) {
			setTitle(item.title);
			setDescription(item.description);
			setCategory(item.category);
			setImageUrl(item.imageUrl);
		}
	}, [item]);

	const updateMeal = () => {
		let meal = {
			title,
			description,
			category,
			imageUrl,
			partner,
		};
		dispatch(updateItems(meal, item._id));
	};

	const classes = useStyles();

	return (
		<>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Paper sx={{ pr: 2 }}>
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
										onClick={updateMeal}
									>
										Add Meal
									</Button>
								</FormControl>
							</form>
						</Paper>
					</Box>
				</Fade>
			</Modal>
		</>
	);
};

export default MealPopup;
