import axios from "axios";
import jwtDecode from "jwt-decode";

export const registerAction = (user) => async (dispatch) => {
	dispatch({ type: "REGISTER_REQUEST" });
	try {
		await axios.post("http://localhost:5000/api/register", user);
		dispatch({ type: "REGISTER_SUCCESS" });
		window.location.href = "/login";
	} catch (error) {
		dispatch({ type: "REGISTER_FAIL", payload: error });
	}
};

export const loginAction = (user) => async (dispatch) => {
	dispatch({ type: "LOGIN_REQUEST" });
	try {
		const res = await axios.post("http://localhost:5000/api/auth", user);
		console.log(res);
		dispatch({ type: "LOGIN_SUCCESS", payload: jwtDecode(res.data) });
		localStorage.setItem("currentUser", JSON.stringify(res.data));
		window.location.href = "/meals";
	} catch (error) {
		dispatch({ type: "LOGIN_FAIL", payload: error });
	}
};

export const logoutAction = () => {
	localStorage.removeItem("currentUser");
	window.location.href = "/login";
};
