import { FETCH_JOB_BY_ID_SUCCESS, FETCH_JOB_SUCCESS } from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  jobs: [],
  job: {},
};

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOB_SUCCESS:
      return { ...state, jobs: action.payload, isLoading: false };
    case FETCH_JOB_BY_ID_SUCCESS:
      return { ...state, job: action.payload, isLoading: false };
    case "error":
      return { ...state, error: action.error.message };
    default:
      return state;
  }
}
