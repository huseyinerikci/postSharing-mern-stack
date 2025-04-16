import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/auth";
import modalReducer from "./reducers/modal";
import postReducer from "./reducers/post";

const initialState = {};
const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  posts: postReducer,
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
