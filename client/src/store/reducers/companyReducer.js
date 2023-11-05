import { FETCH_COMPANIES_SUCCESS } from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  companies: [],
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES_SUCCESS:
      return { ...state, companies: action.payload, isLoading: false };
    case "error":
      return { ...state, error: action.error.message };
    case "loading/true":
      return { ...state, isLoading: action.payload };
    case "error/erase":
      return { ...state, error: null };
    default:
      return state;
  }
}
