import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { postCompanies } from "../stores/actions/actionCreator";
import { useSnackbar } from "notistack";

export default function CreateCompanies() {
  const { sidenavToggleHandler } = useOutletContext();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [companyForm, setCompanyForm] = useState({
    name: "",
    companyLogo: "",
    location: "",
    email: "",
    description: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;

    setCompanyForm({
      ...companyForm,
      [name]: value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    const error = await postCompanies(companyForm);
    if (!error) {
      enqueueSnackbar("New company added successfully!", { variant: "success" });
      navigate("/companies");
    } else {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  }

  return (
    <>
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Navbar sidenavToggleHandler={sidenavToggleHandler} title="Add Jobs" />

        <div className="w-full px-6 py-6 mx-auto">
          <div className="flex flex-wrap">
            <form role="form" onSubmit={submitHandler} className="w-full">
              <div className="flex flex-wrap lg:flex-nowrap" style={{ gap: "1rem" }}>
                <div className="w-full" style={{ paddingTop: "0.6rem" }}>
                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Name</label>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="name-addon"
                      name="name"
                      value={companyForm.name}
                      onChange={changeHandler}
                    />
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Company Logo Url</label>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Company Logo Url"
                      aria-label="Company Logo Url"
                      aria-describedby="company-logo-url-addon"
                      name="companyLogo"
                      value={companyForm.companyLogo}
                      onChange={changeHandler}
                    />
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Location</label>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full  rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Company Location"
                      aria-label="Company Location"
                      aria-describedby="company-location-addon"
                      name="location"
                      value={companyForm.location}
                      onChange={changeHandler}
                    />
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Email</label>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="email-addon"
                      name="email"
                      value={companyForm.email}
                      onChange={changeHandler}
                    ></input>
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
                      onChange={changeHandler}
                      autoComplete="current-description"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
