import { FETCH_COMPANIES_SUCCESS, FETCH_JOB_BY_ID_SUCCESS, FETCH_JOB_SUCCESS } from "./actionTypes";

const fetchJobsSuccess = (payload) => ({ type: FETCH_JOB_SUCCESS, payload });
const fetchJobByIdSuccess = (payload) => ({ type: FETCH_JOB_BY_ID_SUCCESS, payload });
const fetchCompaniesSuccess = (payload) => ({ type: FETCH_COMPANIES_SUCCESS, payload });

const baseURL = "https://jobhub-server.huseinhk.me/public/";

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
    dispatch({ type: "error", error });
  }
};

export const fetchJobById = (id) => async (dispatch) => {
  try {
    const response = await fetch(baseURL + "jobs/" + id);
    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }

    const responseBody = await response.json();
    dispatch(fetchJobByIdSuccess(responseBody));
  } catch (error) {
    dispatch({ type: "error", error });
  }
};

export const fetchCompanies = () => async (dispatch) => {
  try {
    const response = await fetch(baseURL + "companies");

    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }

    const responseBody = await response.json();
    dispatch(fetchCompaniesSuccess(responseBody));
  } catch (error) {
    dispatch({ type: "error", error });
  }
};
