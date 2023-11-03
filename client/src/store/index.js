import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import jobReducer from "./reducers/jobReducer";
import thunk from "redux-thunk";

const reducer = {
  job: jobReducer,
};

const store = createStore(combineReducers(reducer), applyMiddleware(thunk));

export default store;
