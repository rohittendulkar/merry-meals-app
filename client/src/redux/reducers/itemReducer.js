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

export const getitemByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case "GET_ITEM_ID_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "GET_ITEM_ID_SUCCESS":
			return {
				item: action.payload,
				loading: false,
			};
		case "GET_ITEM_ID_FAIL":
			return {
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export const postitemReducer = (state = {}, action) => {
	switch (action.type) {
		case "POST_ITEM_REQUEST":
			return {
				loading: true,
			};
		case "POST_ITEM_SUCCESS":
			return {
				loading: false,
				success: true,
			};
		case "POST_ITEM_FAIL":
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const deleteItemByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case "DELETE_ITEM_REQUEST":
			return {
				loading: true,
			};
		case "DELETE_ITEM_SUCCESS":
			return {
				loading: false,
				success: true,
			};
		case "DELETE_ITEM_FAIL":
			return {
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
