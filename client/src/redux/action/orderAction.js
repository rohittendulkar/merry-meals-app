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
