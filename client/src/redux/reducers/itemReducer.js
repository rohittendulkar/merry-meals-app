export const getitemReducer = (state = { items: [], error: [] }, action) => {
	switch (action.type) {
		case "GET_ITEM_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "GET_ITEM_SUCCESS":
			return {
				items: action.payload,
				loading: false,
			};
		case "GET_ITEM_FAIL":
			return {
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
export const postitemReducer = (state = { items: [], error: [] }, action) => {
	switch (action.type) {
		case "POST_ITEM_REQUEST":
			return {
				...state,
			};
		case "POST_ITEM_SUCCESS":
			return {
				items: action.payload,
			};
		case "POST_ITEM_FAIL":
			return {
				error: action.payload,
			};
		default:
			return state;
	}
};
