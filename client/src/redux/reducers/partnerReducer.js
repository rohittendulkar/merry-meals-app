export const partnerReducer = (state = {}, action) => {
	switch (action.type) {
		case "PARTNER_REQUEST":
			return {
				loading: true,
			};

		case "PARTNER_SUCCESS":
			return {
				loading: false,
				success: true,
			};

		case "PARTNER_FAIL":
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return { state };
	}
};

export const getAllPartnersReducer = (
	state = { partners: [], searchResults: [], error: [] },
	action
) => {
	switch (action.type) {
		case "GET_PARTNERS_REQ":
			return {
				...state,
				loading: true,
			};

		case "GET_PARTNERS_SUCCESS":
			return {
				...state,
				loading: false,
				partners: action.payload,
				searchResults: action.payload,
			};

		case "GET_PARTNERS_FAIL":
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case "SEARCH_PARTNERS":
			return {
				...state,
				partners: action.payload,
			};

		default:
			return state;
	}
};

export const deletePartnerByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case "DELETE_PARTNER_REQUEST":
			return {
				loading: true,
			};
		case "DELETE_PARTNER_SUCCESS":
			return {
				loading: false,
				success: true,
			};
		case "DELETE_PARTNER_FAIL":
			return {
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
