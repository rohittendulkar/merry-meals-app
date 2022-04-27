import React, { useEffect, useState } from "react";
import {
	Alert,
	CircularProgress,
	Grid,
	Paper,
	Snackbar,
	Stack,
	Typography,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { getUserOrders } from "../redux/action/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
const Orders = () => {
	const orderState = useSelector((state) => state.getUserOrderReducer);
	const { loading, error, orders } = orderState;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserOrders());
	}, [dispatch]);

	const [snackState, setsnackState] = useState({
		openSnack: true,
		vertical: "top",
		horizontal: "left",
	});

	const { vertical, horizontal, openSnack } = snackState;

	const handleClose = () => {
		setsnackState({ ...snackState, openSnack: false });
	};
	return (
		<>
			<Typography variant="h3">Your Orders</Typography>
			<Grid
				mt={2}
				container
				direction="column"
				spacing={2}
				justifyContent="center"
				md={6}
				xs={12}
			>
				<Grid item>
					{loading && (
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginTop: "1em",
							}}
						>
							<CircularProgress size={45} />
						</Box>
					)}
					{error && (
						<Snackbar
							anchorOrigin={{ vertical, horizontal }}
							open={openSnack}
							autoHideDuration={6000}
							onClose={handleClose}
						>
							<Alert
								onClose={handleClose}
								severity="error"
								sx={{ width: "100%" }}
							>
								Error While Loading Orders.
							</Alert>
						</Snackbar>
					)}
					{orders &&
						orders.map((order) => (
							<Paper mt={2} elevation={3}>
								<Grid container justifyContent="space-around" p={2} mt={2}>
									<Grid item>
										<Typography variant="h6">Order Items</Typography>
										{order.orderItems.map((item) => (
											<Typography variant="body2">{item.title}</Typography>
										))}
									</Grid>
									<Grid item>
										<Typography variant="h6">Quantity</Typography>
										{order.orderItems.map((item) => (
											<Typography textAlign="center" variant="body2">
												{item.quantity}
											</Typography>
										))}
									</Grid>
									<Grid item>
										<Typography variant="h6">Delivery Address</Typography>
										<>
											<Typography variant="body2">
												Address: {order.deliveryAddress.address}
											</Typography>
											<Typography variant="body2">
												Locality: {order.deliveryAddress.locality}
											</Typography>
											<Typography variant="body2">
												Street: {order.deliveryAddress.street}
											</Typography>
											<Typography variant="body2">
												Zip Code: {order.deliveryAddress.zip}
											</Typography>
										</>
									</Grid>
									<Grid item>
										<Typography variant="h6">Order Info</Typography>

										<Typography variant="body2">
											Order ID: {order._id}
										</Typography>
										<Typography variant="body2">
											<Stack direction="row">
												Food Safety Status:
												{order.checkedForSafety ? (
													<>
														<FiberManualRecord color="success" />
														<Typography variant="body2">
															Checked For Safety
														</Typography>
													</>
												) : (
													<>
														<FiberManualRecord color="error" />
														<Typography variant="body2" alignSelf="center">
															Not Checked For Safety
														</Typography>
													</>
												)}
											</Stack>
										</Typography>
										<Typography variant="body2">
											<Stack direction="row">
												Delivery Status:
												{order.isDelivered ? (
													<>
														<FiberManualRecord color="success" />
														<Typography variant="body2">Delivered</Typography>
													</>
												) : (
													<>
														<FiberManualRecord color="error" />
														<Typography variant="body2" alignSelf="center">
															Not Delivered
														</Typography>
													</>
												)}
											</Stack>
										</Typography>
									</Grid>
								</Grid>
							</Paper>
						))}
				</Grid>
			</Grid>
		</>
	);
};

export default Orders;
