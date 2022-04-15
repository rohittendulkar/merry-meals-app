export const getitemReducer = (state = {}, action) => {
	switch (action.type) {
		case "GET_ITEM_REQUEST":
			return {
				...state,
			};
		case "GET_ITEM_SUCCESS":
			return {
				items: action.payload,
			};
		case "GET_ITEM_FAIL":
			return {
				error: action.payload,
			};
		default:
			return state;
	}
};
export const postitemReducer = (state = {}, action) => {
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
