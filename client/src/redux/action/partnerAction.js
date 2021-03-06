import axios from "axios";

export const partnerAction = (partner) => async (dispatch) => {
	dispatch({ type: "PARTNER_REQUEST" });
	try {
		console.log(partner);
		await axios.post("http://localhost:5000/api/partners/register", partner);
		dispatch({ type: "PARTNER_SUCCESS" });
		window.location.href = "/login";
	} catch (error) {
		dispatch({ type: "PARTNER_FAIL", payload: error });
	}
};

export const getAllPartners = () => async (dispatch) => {
	dispatch({ type: "GET_PARTNERS_REQ" });
	try {
		const res = await axios.get("http://localhost:5000/api/partners");
		console.log(res);
		dispatch({ type: "GET_PARTNERS_SUCCESS", payload: res.data });
	} catch (error) {
		dispatch({ type: "GET_PARTNERS_FAIL", payload: error });
	}
};

export const searchByStreet = (query) => (dispatch, getState) => {
	console.log(query);
	const { getAllPartnersReducer } = getState();
	const searchResults = getAllPartnersReducer.searchResults.filter((p) =>
		p.street.toLowerCase().includes(query.toLowerCase())
	);
	dispatch({ type: "SEARCH_PARTNERS", payload: searchResults });
};

export const deletePartnerById = (id) => async (dispatch) => {
	dispatch({ type: "DELETE_PARTNER_REQUEST" });
	try {
		await axios.delete(`http://localhost:5000/api/partners/${id}`);
		dispatch({ type: "DELETE_PARTNER_SUCCESS" });
	} catch (error) {
		dispatch({ type: "DELETE_PARTNER_FAIL", payload: error });
	}
};
