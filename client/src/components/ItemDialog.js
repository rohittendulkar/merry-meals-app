import React from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const useStyles = makeStyles((theme) => ({
	...theme.spreadThis,
	button: {
		backgroundColor: theme.palette.primary.main,
		color: "white",
		width: "40%",
		margin: "40px 0 0 30%",
		"&:hover": {
			backgroundColor: "#5a5c5a",
		},
	},
}));

export default function PartnerDashboard(props) {
	const classes = useStyles();
	const {
		open,
		handleClose,
		handleSubmit,
		inputs,
		handleInputChange,
		handleFileSelect,
	} = props;
	const { errors } = useSelector((state) => state.UI);

	const { message, errors: errorsItem } = errors || {};

	let imageError;
	let titleError;
	let descError;
	let priceError;

	if (message) {
		if (message.includes("Upload an image")) imageError = message;
	}

	if (errorsItem) {
		for (let error of errorsItem) {
			if (error.msg.includes("Title needs to be")) titleError = error.msg;
			if (error.msg.includes("Description cannot")) descError = error.msg;
			if (error.msg.includes("Price cannot")) priceError = error.msg;
		}
	}

	return (
		<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
			<DialogTitle>Enter details</DialogTitle>
			<DialogContent>
				<form>
					<TextField
						name="title"
						label="Title"
						placeholder="Name of your Item"
						className={classes.textField}
						value={inputs.title}
						onChange={handleInputChange}
						helperText={titleError}
						error={titleError ? true : false}
						fullWidth
					/>
					<TextField
						name="description"
						label="Description"
						placeholder="Spicy, non-veg, Basil leaves"
						className={classes.textField}
						value={inputs.description}
						onChange={handleInputChange}
						helperText={descError}
						error={descError ? true : false}
						fullWidth
					/>
					<TextField
						name="price"
						label="Price"
						placeholder="Price of your Item"
						className={classes.textField}
						type="number"
						value={inputs.price}
						onChange={handleInputChange}
						helperText={priceError}
						error={priceError ? true : false}
						fullWidth
					/>
					<Typography
						variant="body2"
						component="p"
						style={{ margin: "10px 10px 2px 10px" }}
					>
						Select an Image:
					</Typography>
					<input
						accept="image/*"
						className={classes.uploadImages}
						id="raised-button-file"
						type="file"
						onChange={handleFileSelect}
					/>
					{imageError && (
						<Typography
							variant="body2"
							component="p"
							style={{ margin: "4px 10px 2px 10px", color: "#f44336" }}
						>
							Upload an Image as well
						</Typography>
					)}
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} style={{ color: "#c70f02" }}>
					Cancel
				</Button>
				<Button onClick={handleSubmit} color="primary">
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
}
