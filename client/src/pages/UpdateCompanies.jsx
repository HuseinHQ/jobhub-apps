import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

export default function UpdateCompanies() {
  const { sidenavToggleHandler } = useOutletContext();
  const { id } = useParams();

  async function fetchCompanyById() {
    try {
      let response = await fetch("http://localhost:3000/companies/" + id, {
        headers: { access_token: localStorage.access_token },
      });
      if (!response.ok) {
        throw { name: "fetch error" };
      }
      response = await response.json();
      setCompanyForm({
        name: response.name,
        companyLogo: response.companyLogo,
        location: response.location,
        email: response.email,
        description: response.description,
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCompanyById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [companyForm, setCompanyForm] = useState({
    name: "",
    companyLogo: "",
    location: "",
    email: "",
    description: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;

    setCompanyForm({
      ...companyForm,
      [name]: value,
    });
  }

  async function postCompanies(data) {
    try {
      console.log(data);
      const response = await fetch("http://localhost:3000/companies/" + id, {
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
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    postCompanies(companyForm);
    navigate("/companies");
  }

  return (
    <>
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Navbar sidenavToggleHandler={sidenavToggleHandler} title="Edit Jobs" />

        <div className="w-full px-6 py-6 mx-auto">
          <div className="flex flex-wrap">
            <form role="form" onSubmit={submitHandler} className="w-full">
              <div className="flex flex-wrap lg:flex-nowrap" style={{ gap: "1rem" }}>
                <div className="w-full" style={{ paddingTop: "0.6rem" }}>
                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Title</label>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Title"
                      aria-label="Title"
                      aria-describedby="title-addon"
                      name="title"
                      value={companyForm.title}
                      onChange={inputHandler}
                      autoComplete="title"
                    />
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Job Type</label>
                  <div className="mb-4">
                    <select
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full  rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      aria-label="Job Type"
                      aria-describedby="job-type-addon"
                      name="jobType"
                      value={companyForm.jobType}
                      onChange={inputHandler}
                      autoComplete="job-type"
                    >
                      <option value="" disabled>
                        -- Select Job Type --
                      </option>
                      <option value="full time">Full Time</option>
                      <option value="part time">Part Time</option>
                    </select>
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Description</label>
                  <div className="mb-4">
                    <textarea
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Description"
                      aria-label="Description"
                      aria-describedby="description-addon"
                      name="description"
                      value={companyForm.description}
                      onChange={inputHandler}
                      autoComplete="current-description"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block w-full lg:w-1/2 px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
