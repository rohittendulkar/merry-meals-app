import axios from "axios";

export const partnerAction = (partner) => async (dispatch) => {
	dispatch({ type: "PARTNER_REQUEST" });
	try {
		console.log(partner);
		await axios.post("http://localhost:5000/api/partners/register", partner);
		dispatch({ type: "PARTNER_SUCCESS" });
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

export const searchPartners = (query) => (dispatch, getState) => {
	console.log(query);
	const { getAllPartnersReducer } = getState();
	const searchResults = getAllPartnersReducer.searchResults.filter((p) =>
		p.street.toLowerCase().includes(query.toLowerCase())
	);
	dispatch({ type: "SEARCH_PARTNERS", payload: searchResults });
};
