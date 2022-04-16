import axios from "axios";

export const getItems = () => async (dispatch) => {
	dispatch({ type: "GET_ITEM_REQUEST" });
	try {
		const res = await axios.get("http://localhost:5000/api/items/getItems");
		console.log(res);
		dispatch({ type: "GET_ITEM_SUCCESS", payload: res.data });
	} catch (err) {
		dispatch({ type: "GET_ITEM_FAIL", payload: err });
	}
};
export const postItems = () => async (dispatch) => {
	dispatch({ type: "POST_ITEM_REQUEST" });
	try {
		const res = await axios.post("http://localhost:5000/api/items/postItems");
		console.log(res);
		dispatch({ type: "POST_ITEM_SUCCESS", payload: res.data });
	} catch (err) {
		dispatch({ type: "POST_ITEM_FAIL", payload: err });
	}
};
