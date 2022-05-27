import {
	Button,
	Paper,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrderById, getAllOrders } from "../../redux/action/orderAction";
import DeleteIcon from "@mui/icons-material/Delete";

const OrderDashboard = () => {
	const { loading, orders } = useSelector((state) => state.getAllOrdersReducer);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllOrders());
	}, [dispatch]);

	const deleteOrder = (id) => {
		dispatch(deleteOrderById(id));
		window.location.reload();
	};

	return (
		<>
			<TableContainer sx={{ width: "950px" }} component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Name</TableCell>
							<TableCell align="center">Email ID</TableCell>
							<TableCell align="center">Order Items</TableCell>
							<TableCell align="center">Order Status</TableCell>
							<TableCell align="center">Delete Order</TableCell>
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

						{orders &&
							orders.map((order) => (
								<TableRow
									key={order._id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell align="center">
										{order.firstname} {order.lastname}
									</TableCell>
									<TableCell align="center">{order.email}</TableCell>
									
									<TableCell align="center">
										{order.orderItems.map((items) => items.title).join(", ")}
										
									</TableCell>
									
									<TableCell align="center">{order.isDelivered === true? "Delivered":"Not Delivered"}</TableCell>
									<TableCell align="center">
										<Button
											variant="outlined"
											startIcon={<DeleteIcon />}
											onClick={() => deleteOrder(order._id)}
											color="error"
										>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default OrderDashboard;
