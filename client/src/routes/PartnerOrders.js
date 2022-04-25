import React, { useEffect } from "react";
import {
	Box,
	Button,
	IconButton,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getOrdersByPartner } from "../redux/action/orderAction";

const PartnerOrders = () => {
	const { id } = useParams();
	const { orders } = useSelector((state) => state.getOrderByPartnerReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOrdersByPartner(id));
	}, [dispatch, id]);
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
						{orders.map((order) => (
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
										<Typography variant="body2" color="success">
											Checked
										</Typography>
									) : (
										<Button variant="contained" color="error">
											Check for Safety
										</Button>
									)}
								</TableCell>
								<TableCell align="center">
									{order.isDelivered ? (
										<Typography variant="body2" color="success">
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
