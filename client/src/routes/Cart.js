import React from "react";
import {
	CardMedia,
	Chip,
	Divider,
	Grid,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartAction";
const Cart = () => {
	const cartState = useSelector((state) => state.cartReducer);
	const { cartItems } = cartState;
	const dispatch = useDispatch();
	return (
		<>
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
								<Grid item mt={2} pt={2}>
									<Paper>
										<Grid container spacing={2}>
											<Grid item>
												<CardMedia
													component="img"
													sx={{ height: "140px", width: "140px" }}
													image={item.imageUrl}
													alt={item.title}
												/>
											</Grid>
											<Grid item>
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
								<Typography variant="h3">Donate (Upcoming)</Typography>
							</Grid>
							<Grid item pt={2}>
								<Typography variant="h6">
									We need your support to keep on operating
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};

export default Cart;
