import {
	SET_ERRORS,
	CLEAR_ERRORS,
	LOADING_UI,
	SERVER_ERROR,
	SIGNUP_SUCCESS,
	SET_ERROR,
	SET_ERRORS_SIGNUP_PARTNER,
	SET_ERROR_ITEM,
} from "../types";

const initialState = {
	loading: false,
	serverError: false,
	errors: null,
	errorsPartner: null,
	signUpSuccess: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_ERRORS:
			return {
				...state,
				loading: false,
				errors: action.payload.errors,
				serverError: false,
			};
		case SET_ERROR:
			return {
				...state,
				loading: false,
				errors: action.payload.message,
				serverError: false,
			};
		case SET_ERROR_ITEM:
			return {
				...state,
				loading: false,
				errors: action.payload,
				serverError: false,
			};
		case SET_ERRORS_SIGNUP_PARTNER:
			return {
				...state,
				loading: false,
				errorsPartner: action.payload,
				serverError: false,
			};
		case SERVER_ERROR:
			return {
				...state,
				loading: false,
				serverError: true,
				errors: null,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				loading: false,
				errors: null,
				errorsPartner: null,
			};
		case LOADING_UI:
			return {
				...state,
				loading: true,
				serverError: false,
				signUpSuccess: false,
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				signUpSuccess: true,
			};
		default:
			return state;
	}
}
