import axios from "axios";

export const placeOrder = () => async (dispatch, getState) => {
	dispatch({ type: "PLACE_ORDER_REQUEST" });
	const currentUser = getState().loginReducer.currentUser;
	const cartItems = getState().cartReducer.cartItems;
	try {
		const res = await axios.post(
			"http://localhost:5000/api/orders/placeorder",
			{ currentUser, cartItems }
		);
		dispatch({ type: "PLACE_ORDER_SUCCESS" });
		localStorage.removeItem("cartItems");
		window.location.href = "/orders";
		console.log(res);
	} catch (error) {
		dispatch({ type: "PLACE_ORDER_FAIL", payload: error });
		console.log(error);
	}
};

export const getUserOrders = () => async (dispatch, getState) => {
	const currentUser = getState().loginReducer.currentUser.user;
	console.log(currentUser);
	dispatch({ type: "USER_ORDER_REQUEST" });
	try {
		const res = await axios.post(
			"http://localhost:5000/api/orders/getuserorders",
			{ userid: currentUser._id }
		);
		console.log(res);
		dispatch({ type: "USER_ORDER_SUCCESS", payload: res.data });
	} catch (error) {
		dispatch({ type: "USER_ORDER_FAIL", payload: error });
	}
};

export const getOrdersByPartner = (id) => async (dispatch) => {
	dispatch({ type: "GET_ORDER_REQUEST" });
	try {
		const res = await axios.get(`http://localhost:5000/api/orders/${id}`);
		dispatch({ type: "GET_ORDER_SUCCESS", payload: res.data });
	} catch (error) {
		dispatch({ type: "GET_ORDER_FAIL", payload: error });
	}
};

export const deliverOrder = (orderid, id) => async (dispatch, getState) => {
	dispatch({
		type: "GET_ALL_ORDER_REQUEST",
	});
	try {
		await axios.post("http://localhost:5000/api/orders/deliverorder", {
			orderid,
		});
		alert("Delivered Successfully");
		const orders = await axios.get(`http://localhost:5000/api/orders/${id}`);
		dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
		window.location.reload();
	} catch (error) {
		dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
	}
};
