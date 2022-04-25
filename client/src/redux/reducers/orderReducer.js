export const placeOrderReducer = (state = {}, action) => {
	switch (action.type) {
		case "PLACE_ORDER_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "PLACE_ORDER_SUCCESS":
			return {
				loading: false,
				success: true,
			};
		case "PLACE_ORDER_FAIL":
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
export const getUserOrderReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case "USER_ORDER_REQUEST":
			return {
				loading: true,
			};
		case "USER_ORDER_SUCCESS":
			return {
				loading: false,
				success: true,
				orders: action.payload,
			};
		case "USER_ORDER_FAIL":
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const getOrderByPartnerReducer = (
	state = { orders: [], error: [] },
	action
) => {
	switch (action.type) {
		case "GET_ORDER_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "GET_ORDER_SUCCESS":
			return {
				orders: action.payload,
				loading: false,
			};
		case "GET_ORDER_FAIL":
			return {
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
