import { FETCH_JOBS_SUCCESS, FETCH_JOB_BY_ID_SUCCESS, FETCH_COMPANIES_SUCCESS, FETCH_COMPANY_BY_ID_SUCCESS } from "./actionType";

const baseURL = "http://localhost:3000";

// JOBS SUCCESS ACTION
const fecthJobSuccess = (payload) => ({ type: FETCH_JOBS_SUCCESS, payload });
const fetchJobByIdSuccess = (payload) => ({ type: FETCH_JOB_BY_ID_SUCCESS, payload });

// COMPANIES SUCCESS ACTION
const fetchCompanySuccess = (payload) => ({ type: FETCH_COMPANIES_SUCCESS, payload });
const fetchCompanyByIdSuccess = (payload) => ({ type: FETCH_COMPANY_BY_ID_SUCCESS, payload });

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

export const deleteJobs = async (id) => {
  try {
    const response = await fetch(baseURL + "/jobs/" + id, {
      method: "delete",
      headers: {
        access_token: localStorage.access_token,
        "Content-Type": "application.json",
      },
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }
    return false;
  } catch (error) {
    return error;
  }
};

export const postJobs = async (data) => {
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
      const { message } = await response.json();
      throw { message };
    }
    return false;
  } catch (error) {
    return error;
  }
};

export const putJobs = async (data, id) => {
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
      const { message } = await response.json();
      throw { message };
    }
    return false;
  } catch (error) {
    return error;
  }
};

// COMPANY ACTIONS
export const fetchCompanies = () => async (dispatch) => {
  try {
    let response = await fetch(baseURL + "/companies", {
      headers: { access_token: localStorage.access_token },
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }
    response = await response.json();
    dispatch(fetchCompanySuccess(response));
  } catch (error) {
    dispatch({ type: "error", error });
  }
};

export const fetchCompanyById = (id) => async (dispatch) => {
  try {
    let response = await fetch(baseURL + "/companies/" + id, {
      headers: { access_token: localStorage.access_token },
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }
    response = await response.json();
    dispatch(fetchCompanyByIdSuccess(response));
  } catch (error) {
    dispatch({ type: "error", error });
  }
};

export const deleteCompanies = async (id) => {
  try {
    const response = await fetch(baseURL + "/companies/" + id, {
      method: "delete",
      headers: {
        access_token: localStorage.access_token,
        "Content-Type": "application.json",
      },
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw { message };
    }
    return false;
  } catch (error) {
    return error;
  }
};

export const postCompanies = async (data) => {
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
      const { message } = await response.json();
      throw { message };
    }
    return false;
  } catch (error) {
    return error;
  }
};

export const putCompanies = async (data, id) => {
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
      const { message } = await response.json();
      throw { message };
    }
    return false;
  } catch (error) {
    return error;
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
