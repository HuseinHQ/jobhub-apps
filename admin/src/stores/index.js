import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import jobReducer from "./reducers/jobReducer";
import companyReducer from "./reducers/companyReducer";

const rootReducer = combineReducers({ jobReducer, companyReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
