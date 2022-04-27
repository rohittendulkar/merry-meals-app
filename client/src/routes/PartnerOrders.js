import React, { useEffect, useState } from "react";
import {
	Alert,
	Button,
	Paper,
	Skeleton,
	Snackbar,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	deliverOrder,
	getOrdersByPartner,
	orderSafety,
} from "../redux/action/orderAction";

const PartnerOrders = () => {
	const { id } = useParams();
	const { loading, error, orders } = useSelector(
		(state) => state.getOrderByPartnerReducer
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOrdersByPartner(id));
	}, [dispatch, id]);

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
			<TableContainer sx={{ width: "950px" }} component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Order ID</TableCell>
							<TableCell align="center">Placed By</TableCell>
							<TableCell align="center">Email ID</TableCell>
							<TableCell align="center">Delivery Address</TableCell>
							<TableCell align="center">Checked for Safety</TableCell>
							<TableCell align="center">Delivery Status</TableCell>
							<TableCell align="center">Placed At</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{loading && (
							<TableRow>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
								<TableCell>
									<Skeleton animation="wave" />
								</TableCell>
							</TableRow>
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
								<TableRow
									key={order._id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{order._id}
									</TableCell>
									<TableCell align="center">
										{order.firstname} {order.lastname}
									</TableCell>
									<TableCell align="center">{order.email}</TableCell>
									<TableCell align="center">
										{order.deliveryAddress.locality}
									</TableCell>
									<TableCell align="center">
										{order.checkedForSafety ? (
											<Typography variant="body2" sx={{ color: "success" }}>
												Checked
											</Typography>
										) : (
											<Button
												variant="contained"
												color="error"
												onClick={() => dispatch(orderSafety(order._id, id))}
											>
												Check for Safety
											</Button>
										)}
									</TableCell>
									<TableCell align="center">
										{order.isDelivered ? (
											<Typography variant="body2" sx={{ color: "success" }}>
												Delivered
											</Typography>
										) : (
											<Button
												variant="contained"
												color="error"
												onClick={() => dispatch(deliverOrder(order._id, id))}
											>
												Deliver
											</Button>
										)}
									</TableCell>
									<TableCell align="center">
										{order.createdAt.substring(0, 10)}
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default PartnerOrders;
