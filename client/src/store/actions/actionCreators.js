import { FETCH_JOB_SUCCESS } from "./actionTypes";

const fetchJobsSuccess = (payload) => ({ type: FETCH_JOB_SUCCESS, payload });

const baseURL = "http://localhost:3000/public/";

export const fetchJobs = () => async (dispatch) => {
  try {
    const response = await fetch(baseURL + "jobs");

    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }

    const responseBody = await response.json();
    dispatch(fetchJobsSuccess(responseBody));
  } catch (error) {
    dispatch({ type: "error", payload: error });
  }
};
