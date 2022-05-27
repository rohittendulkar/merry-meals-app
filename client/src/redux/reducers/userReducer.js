export const registerReducer = (state = {}, action) => {
	switch (action.type) {
		case "REGISTER_REQUEST":
			return {
				loading: true,
			};

		case "REGISTER_SUCCESS":
			return {
				loading: false,
				success: true,
			};

		case "REGISTER_FAIL":
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return { state };
	}
};

export const loginReducer = (state = {}, action) => {
	switch (action.type) {
		case "LOGIN_REQUEST":
			return {
				loading: true,
			};

		case "LOGIN_SUCCESS":
			return {
				loading: false,
				success: true,
				currentUser: action.payload,
			};

		case "LOGIN_FAIL":
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const getAllUsersReducer = (
	state = { users: [], error: [] },
	action
) => {
	switch (action.type) {
		case "USERS_REQUEST":
			return {
				...state,
				loading: true,
			};

		case "USERS_SUCCESS":
			return {
				...state,
				loading: false,
				success: true,
				users: action.payload,
			};

		case "USERS_FAIL":
			return {
        ...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const deleteUserByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case "DELETE_USER_REQUEST":
			return {
				loading: true,
			};
		case "DELETE_USER_SUCCESS":
			return {
				loading: false,
				success: true,
			};
		case "DELETE_USER_FAIL":
			return {
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
