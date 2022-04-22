import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { getUserOrders } from "../redux/action/orderAction";
import { useDispatch, useSelector } from "react-redux";
const Orders = () => {
	const orderState = useSelector((state) => state.getUserOrderReducer);
	const { loading, errors, orders } = orderState;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserOrders());
	});

	return (
		<>
			<Typography variant="h3">Your Orders</Typography>
		</>
	);
};

export default Orders;
