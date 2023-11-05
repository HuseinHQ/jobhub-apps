import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import jobReducer from "./reducers/jobReducer";
import companyReducer from "./reducers/companyReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ jobReducer, companyReducer });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
