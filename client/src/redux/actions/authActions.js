import {
	SIGNUP_SUCCESS,
	LOADING_UI,
	SET_ERRORS,
	SERVER_ERROR,
	CLEAR_ERRORS,
	LOADING_USER,
	SET_USER,
	SET_ERROR,
	SET_UNAUTHENTICATED,
	SET_ERRORS_SIGNUP_PARTNER,
} from "../types";

import axios from "../../util/axios";
import axiosNewInstance from "axios";

export const signupUser = (newUserData, history) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.post("/auth/signup-user", newUserData)
		.then((res) => {
			dispatch({
				type: SIGNUP_SUCCESS,
			});
			dispatch({ type: CLEAR_ERRORS });
			history.push("/login");
		})
		.catch((err) => {
			console.log(err.response.data);
			if (err.response) {
				dispatch({
					type: SET_ERRORS,
					payload: err.response.data,
				});
			} else {
				dispatch({
					type: SERVER_ERROR,
				});
			}
		});
};

export const loginAction = (userData, history) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.post("/auth/login", userData)
		.then((res) => {
			const jwt = `Bearer ${res.data.token}`;
			localStorage.setItem("jwt", jwt);
			axios.defaults.headers.common["Authorization"] = jwt;
			dispatch(getUserData());
			dispatch({ type: CLEAR_ERRORS });
			console.log("Authenticated, check localStorage", jwt);
			history.push("/");
		})
		.catch((err) => {
			if (err.response) {
				dispatch({
					type: SET_ERROR,
					payload: err.response.data,
				});
			} else {
				dispatch({
					type: SERVER_ERROR,
				});
			}
		});
};

export const getUserData = () => (dispatch) => {
	dispatch({ type: LOADING_USER });
	axios
		.get("/user")
		.then((res) => {
			dispatch({
				type: SET_USER,
				payload: res.data.result,
			});
		})
		.catch((err) => console.log(err));
};

export const signupPartner = (newPartnerData, history) => (dispatch) => {
	const location = `+${newPartnerData.get("aptName")},+${newPartnerData.get(
		"locality"
	)},+${newPartnerData.get("street")},+${newPartnerData.get("zip")}`;
	axiosNewInstance
		.get("https://maps.googleapis.com/maps/api/geocode/json", {
			params: {
				address: location,
				key: process.env.REACT_APP_GOOGLE_API_KEY,
			},
		})
		.then((result) => {
			if (
				Array.isArray(result.data.results) &&
				result.data.results.length > 0
			) {
				const formattedAddress = result.data.results[0].formatted_address;
				const lat = result.data.results[0].geometry.location.lat;
				const lng = result.data.results[0].geometry.location.lng;
				newPartnerData.append("lat", lat);
				newPartnerData.append("lng", lng);
				newPartnerData.append("formattedAddress", formattedAddress);
			}

			dispatch(signupPartnerFinal(newPartnerData, history));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signupPartnerFinal = (newPartnerData, history) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.post("/auth/signup-partner", newPartnerData)
		.then((res) => {
			dispatch({
				type: SIGNUP_SUCCESS,
			});
			dispatch({ type: CLEAR_ERRORS });
			history.push("/login");
		})
		.catch((err) => {
			if (err.response) {
				dispatch({
					type: SET_ERRORS_SIGNUP_PARTNER,
					payload: err.response.data,
				});
			} else {
				dispatch({
					type: SERVER_ERROR,
				});
			}
		});
};

export const logoutAction = (history) => (dispatch) => {
	localStorage.removeItem("jwt");
	delete axios.defaults.headers.common["Authorization"];
	dispatch({ type: SET_UNAUTHENTICATED });
	if (history) history.push("/login");
};
