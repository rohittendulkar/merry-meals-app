import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { registerReducer, loginReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
