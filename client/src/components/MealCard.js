import {
	Alert,
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Divider,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	Snackbar,
	Stack,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartAction";

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #1D3557",
	borderRadius: "8px",
	boxShadow: 24,
	p: 4,
};

const MealCard = ({ item }) => {
	const [quantity, setQuantity] = useState(1);

	const [openState, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(addToCart(item, quantity));
	};

	const userState = useSelector((state) => state.loginReducer);
	const { currentUser } = userState;
	const [snackState, setsnackState] = useState({
		openSnack: true,
		vertical: "top",
		horizontal: "left",
	});

	const { vertical, horizontal, openSnack } = snackState;

	const handleSnack = () => {
		setsnackState({ ...snackState, openSnack: false });
	};
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea onClick={handleOpen}>
					<CardMedia
						component="img"
						height="140"
						image={item.imageUrl}
						alt={item.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{item.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{item.description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardContent>
					<Grid
						container
						spacing={3}
						sx={{ mt: 2 }}
						justifyContent="space-around"
						alignItems="center"
					>
						<Grid item>
							<Chip label={item.category} />
						</Grid>
						{currentUser && currentUser.user && (
							<Grid item>
								<FormControl sx={{ m: 1, minWidth: 80 }} size="small">
									<InputLabel id="demo-simple-select-autowidth-label">
										Qty
									</InputLabel>
									<Select
										labelId="demo-simple-select-autowidth-label"
										id="demo-simple-select-autowidth"
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
										autoWidth
										label="Qty"
									>
										{[...Array(5).keys()].map((val, i) => (
											<MenuItem key={val} sx={{ mx: 2 }} value={i + 1}>
												{i + 1}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						)}
					</Grid>
				</CardContent>

				<CardActions>
					{!currentUser ? (
						<>
							<Snackbar
								anchorOrigin={{ vertical, horizontal }}
								open={openSnack}
								autoHideDuration={6000}
								onClose={handleSnack}
							>
								<Alert
									onClose={handleSnack}
									severity="error"
									sx={{ width: "100%" }}
								>
									Login before placing order
								</Alert>
							</Snackbar>
						</>
					) : !currentUser.user ? (
						<>
							<Snackbar
								anchorOrigin={{ vertical, horizontal }}
								open={openSnack}
								autoHideDuration={6000}
								onClose={handleSnack}
							>
								<Alert
									onClose={handleSnack}
									severity="error"
									sx={{ width: "100%" }}
								>
									Partners cannot place an Order
								</Alert>
							</Snackbar>
						</>
					) : (
						<Button size="small" color="primary" onClick={addToCartHandler}>
							Add to Cart
						</Button>
					)}
				</CardActions>
			</Card>
			<Modal open={openState} onClose={handleClose}>
				<Box sx={modalStyle}>
					<Stack
						container
						divider={<Divider orientation="horizontal" flexItem />}
						spacing={2}
					>
						<Typography variant="h6" component="h2">
							{item.title}
						</Typography>

						<Grid container spacing={2}>
							<Grid item xs>
								<CardMedia
									component="img"
									height="140"
									image={item.imageUrl}
									alt={item.title}
								/>
							</Grid>
							<Grid item xs>
								<Typography sx={{ mt: 2, color: "secondary.dark" }}>
									Description:
								</Typography>
								<Typography sx={{ mt: 2 }}>{item.description}</Typography>
							</Grid>
						</Grid>
					</Stack>
				</Box>
			</Modal>
		</>
	);
};

export default MealCard;
