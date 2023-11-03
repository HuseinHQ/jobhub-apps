import {
  FETCH_JOBS_SUCCESS,
  FETCH_JOB_BY_ID_SUCCESS,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANY_BY_ID_SUCCESS,
  POST_COMPANIES_SUCCESS,
  POST_JOBS_SUCCESS,
  PUT_JOBS_SUCCESS,
  PUT_COMPANIES_SUCCESS,
} from "./actionType";

const baseURL = "http://localhost:3000";

// JOBS SUCCESS ACTION
const fecthJobSuccess = (payload) => ({ type: FETCH_JOBS_SUCCESS, payload });
const fetchJobByIdSuccess = (payload) => ({ type: FETCH_JOB_BY_ID_SUCCESS, payload });
const postJobsSuccess = () => ({ type: POST_JOBS_SUCCESS });
const putJobSuccess = () => ({ type: PUT_JOBS_SUCCESS });

// COMPANIES SUCCESS ACTION
const fetchCompanySuccess = (payload) => ({ type: FETCH_COMPANIES_SUCCESS, payload });
const fetchCompanyByIdSuccess = (payload) => ({ type: FETCH_COMPANY_BY_ID_SUCCESS, payload });
const postCompaniesSuccess = () => ({ type: POST_COMPANIES_SUCCESS });
const putCompaniesSuccess = () => ({ type: PUT_COMPANIES_SUCCESS });

// JOB ACTIONS
export const fetchJobs = () => async (dispatch) => {
  try {
    let response = await fetch(baseURL + "/jobs", {
      headers: { access_token: localStorage.access_token },
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }
    response = await response.json();
    dispatch(fecthJobSuccess(response));
  } catch (error) {
    dispatch({ type: "error", error });
  }
};

export const fetchJobById = (id) => async (dispatch) => {
  try {
    let response = await fetch(baseURL + "/jobs/" + id, {
      headers: { access_token: localStorage.access_token },
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }
    response = await response.json();
    dispatch(fetchJobByIdSuccess(response));
  } catch (error) {
    dispatch({ type: "error", error });
  }
};

export const deleteJobs = (id) => async (dispatch) => {
  try {
    const response = await fetch(baseURL + "/jobs/" + id, {
      method: "delete",
      headers: {
        access_token: localStorage.access_token,
        "Content-Type": "application.json",
      },
    });
    if (!response.ok) {
      throw { name: "fetch_error" };
    }
    dispatch(fetchJobs());
  } catch (error) {
    console.log(error);
  }
};

export const postJobs = (data) => async (dispatch) => {
  try {
    const response = await fetch(baseURL + "/jobs", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw { name: "fetch_error" };
    }
    dispatch(postJobsSuccess());
  } catch (error) {
    console.log(error);
  }
};

export const putJobs = (data, id) => async (dispatch) => {
  try {
    console.log(data);
    const response = await fetch(baseURL + "/jobs/" + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw { name: "fetch_error" };
    }
    dispatch(putJobSuccess());
  } catch (error) {
    console.log(error);
  }
};

// COMPANY ACTIONS
export const fetchCompanies = () => async (dispatch) => {
  try {
    let response = await fetch(baseURL + "/companies", {
      headers: { access_token: localStorage.access_token },
    });
    if (!response.ok) {
      throw { name: "fetch_error" };
    }
    response = await response.json();
    dispatch(fetchCompanySuccess(response));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCompanyById = (id) => async (dispatch) => {
  try {
    let response = await fetch(baseURL + "/companies/" + id, {
      headers: { access_token: localStorage.access_token },
    });
    if (!response.ok) {
      throw { name: "fetch error" };
    }
    response = await response.json();
    dispatch(fetchCompanyByIdSuccess(response));
  } catch (error) {
    console.log(error);
  }
};

export const deleteCompanies = (id) => async (dispatch) => {
  try {
    const response = await fetch(baseURL + "/companies/" + id, {
      method: "delete",
      headers: {
        access_token: localStorage.access_token,
        "Content-Type": "application.json",
      },
    });
    if (!response.ok) {
      throw { name: "fetch_error" };
    }
    dispatch(fetchCompanies());
  } catch (error) {
    console.log(error);
  }
};

export const postCompanies = (data) => async (dispatch) => {
  try {
    const response = await fetch(baseURL + "/companies", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw { name: "fetch_error" };
    }
    dispatch(postCompaniesSuccess());
  } catch (error) {
    console.log(error);
  }
};

export const putCompanies = (data, id) => async (dispatch) => {
  try {
    console.log(data);
    const response = await fetch(baseURL + "/companies/" + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw { name: "fetch_error" };
    }
    dispatch(putCompaniesSuccess());
  } catch (error) {
    console.log(error);
  }
};

// USER ACTIONS
export const login = async (data) => {
  try {
    let response = await fetch(baseURL + "/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }

    const { access_token } = await response.json();
    localStorage.access_token = access_token;
  } catch (error) {
    return error;
  }
};

export const register = async (data) => {
  try {
    const response = await fetch(baseURL + "/register", {
      method: "post",
      headers: {
        access_token: localStorage.access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }
  } catch (error) {
    return error;
  }
};
