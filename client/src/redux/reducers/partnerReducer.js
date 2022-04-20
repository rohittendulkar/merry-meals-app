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
