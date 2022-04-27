import React, { useState } from "react";
import {
	Button,
	CardMedia,
	Chip,
	Divider,
	Grid,
	IconButton,
	Paper,
	Typography,
	CircularProgress,
	Snackbar,
	Alert,
} from "@mui/material";
import { Add, Delete, Remove, ShoppingCartCheckout } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/action/cartAction";
import { placeOrder } from "../redux/action/orderAction";
const Cart = () => {
	const [snackState, setsnackState] = useState({
		open: true,
		vertical: "top",
		horizontal: "left",
	});
	const { vertical, horizontal, open } = snackState;
	const handleClose = () => {
		setsnackState({ ...snackState, open: false });
	};

	const cartState = useSelector((state) => state.cartReducer);
	const { cartItems } = cartState;
	const orderstate = useSelector((state) => state.placeOrderReducer);
	const { loading, error, success } = orderstate;
	const dispatch = useDispatch();
	return (
		<>
			{error ? (
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
						Error Placing Order.
					</Alert>
				</Snackbar>
			) : success ? (
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert
						onClose={handleClose}
						severity="success"
						sx={{ width: "100%" }}
					>
						Order Placed Successfully.
					</Alert>
				</Snackbar>
			) : null}
			<Grid
				spacing={5}
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item md={7}>
					<Paper>
						<Grid container direction="column" justifyContent="center" p={2}>
							<Grid item>
								<Typography variant="h3">Cart</Typography>
							</Grid>
							<Divider />
							{cartItems.map((item) => (
								<Grid item mt={2} pt={2} key={item.title}>
									<Paper elevation={3}>
										<Grid container spacing={2} justifyContent="space-around">
											<Grid item m={2}>
												<CardMedia
													component="img"
													sx={{ height: "140px", width: "140px" }}
													image={item.imageUrl}
													alt={item.title}
												/>
											</Grid>
											<Grid item m={2}>
												<Grid
													container
													direction="column"
													spacing={2}
													justifyContent="center"
												>
													<Grid item>
														<Typography variant="h5">{item.title}</Typography>
													</Grid>
													<Grid item>
														<Chip label={item.category} />
													</Grid>
													<Grid item>
														<Typography variant="h5">
															Quantity:{" "}
															<IconButton
																size="large"
																color="error"
																onClick={() => {
																	dispatch(addToCart(item, item.quantity - 1));
																}}
															>
																<Remove />
															</IconButton>{" "}
															{item.quantity}{" "}
															<IconButton
																size="large"
																color="success"
																onClick={() => {
																	dispatch(addToCart(item, item.quantity + 1));
																}}
															>
																<Add />
															</IconButton>
														</Typography>
													</Grid>
												</Grid>
											</Grid>
											<Grid item m={2} alignSelf="center">
												<IconButton
													size="large"
													color="error"
													onClick={() => {
														dispatch(deleteFromCart(item));
													}}
												>
													<Delete />
												</IconButton>
											</Grid>
										</Grid>
									</Paper>
								</Grid>
							))}
						</Grid>
					</Paper>
				</Grid>
				<Grid item md={4}>
					<Paper>
						<Grid container direction="column" alignItems="center" p={2}>
							<Grid item>
								<Typography variant="h3">Consider Donating?</Typography>
							</Grid>
							<Grid item pt={2}>
								<Typography variant="h6">
									We need your support to keep on operating
								</Typography>
							</Grid>
							<Grid item pt={2}>
								<Button
									variant="contained"
									color="warning"
									endIcon={!loading ? <ShoppingCartCheckout /> : null}
									onClick={() => {
										dispatch(placeOrder());
									}}
								>
									Checkout
									{loading ? (
										<CircularProgress color="inherit" size={25} />
									) : null}
								</Button>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};

export default Cart;
