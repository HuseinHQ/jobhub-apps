import { FETCH_COMPANIES_SUCCESS, FETCH_COMPANY_BY_ID_SUCCESS } from "../actions/actionType";

const initialState = {
  companies: [],
  company: {
    name: "",
    companyLogo: "",
    location: "",
    email: "",
    description: "",
  },
  isLoading: true,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES_SUCCESS:
      return { ...state, companies: action.payload, isLoading: false };
    case FETCH_COMPANY_BY_ID_SUCCESS:
      return { ...state, company: action.payload, isLoading: false };
    case "loading/true":
      return { ...state, isLoading: true };
    case "error/erase":
      return { ...state, error: null };
    default:
      return state;
  }
};

export default companyReducer;
