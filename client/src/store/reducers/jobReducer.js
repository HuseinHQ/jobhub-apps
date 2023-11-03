import { FETCH_JOB_SUCCESS } from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  jobs: [],
};

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOB_SUCCESS:
      return { ...state, jobs: action.payload, isLoading: false };
    case "error":
      return { ...state, error: action.error };
    default:
      return state;
  }
}
