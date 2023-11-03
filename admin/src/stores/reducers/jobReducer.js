import { FETCH_JOBS_SUCCESS, FETCH_JOB_BY_ID_SUCCESS } from "../actions/actionType";

const initialState = {
  jobs: [],
  job: {
    title: "",
    description: "",
    companyId: 0,
    authorId: 0,
    jobType: "",
    Skills: [],
  },
  error: null,
  isLoading: true,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return { ...state, jobs: action.payload, isLoading: false };
    case FETCH_JOB_BY_ID_SUCCESS:
      return { ...state, job: action.payload, isLoading: false };
    case "error":
      return { ...state, error: action.error };
    case "loading/true":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default jobReducer;
