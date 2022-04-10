import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./reducers/registerReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  registerReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
