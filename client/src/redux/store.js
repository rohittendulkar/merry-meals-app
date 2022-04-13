import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { registerReducer, loginReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import jwtDecode from "jwt-decode";

const currentUser = localStorage.getItem("currentUser")
  ? jwtDecode(JSON.parse(localStorage.getItem("currentUser")))
  : null;

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
});

const initialState = {
  loginReducer: {
    currentUser,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
