import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from "redux";
import jobReducer from "./reducers/jobReducer";
import companyReducer from "./reducers/companyReducer";
import thunk from "redux-thunk";

const reducer = {
  job: jobReducer,
  company: companyReducer,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(reducer), composeEnhancers(applyMiddleware(thunk)));

export default store;
