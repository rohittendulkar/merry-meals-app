import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {
	registerReducer,
	loginReducer,
	getAllUsersReducer,
} from "./reducers/userReducer";
import {
	getitemReducer,
	postitemReducer,
	getitemByIdReducer,
	deleteItemByIdReducer,
} from "./reducers/itemReducer";
import {
	partnerReducer,
	deletePartnerByIdReducer,
	getAllPartnersReducer,
} from "./reducers/partnerReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
	placeOrderReducer,
	getUserOrderReducer,
	deleteOrderByIdReducer,
	getOrderByPartnerReducer,
	getAllOrdersReducer,
} from "./reducers/orderReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import jwtDecode from "jwt-decode";

const currentUser = localStorage.getItem("currentUser")
	? jwtDecode(JSON.parse(localStorage.getItem("currentUser")))
	: null;

const cartItems = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];

const rootReducer = combineReducers({
	registerReducer,
	loginReducer,
	getitemReducer,
	postitemReducer,
	cartReducer,
	partnerReducer,
	placeOrderReducer,
	getUserOrderReducer,
	getAllPartnersReducer,
	getOrderByPartnerReducer,
	getitemByIdReducer,
	deleteItemByIdReducer,
	getAllUsersReducer,
	deletePartnerByIdReducer,
	deleteOrderByIdReducer,
	getAllOrdersReducer,
});

const initialState = {
	loginReducer: {
		currentUser,
	},
	cartReducer: {
		cartItems,
	},
};
const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
