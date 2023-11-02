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
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return { ...state, jobs: action.payload };
    case FETCH_JOB_BY_ID_SUCCESS:
      return { ...state, job: action.payload };
    default:
      return state;
  }
};

export default jobReducer;
