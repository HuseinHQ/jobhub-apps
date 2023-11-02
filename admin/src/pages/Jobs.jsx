import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteJobs, fetchJobs } from "../stores/actions/actionCreator";
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Jobs() {
  const { sidenavToggleHandler } = useOutletContext();

  const jobs = useSelector((state) => state.jobReducer.jobs);
  const error = useSelector((state) => state.jobReducer.error);
  const isLoading = useSelector((state) => state.jobReducer.isLoading);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  }, [error]);

  function deleteHandler(e, id) {
    e.preventDefault();
    dispatch(deleteJobs(id));
    enqueueSnackbar(`Job with id ${id} deleted successfully!`, { variant: "success" });
  }

  return (
    <>
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Navbar sidenavToggleHandler={sidenavToggleHandler} title="Jobs" />
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className="w-full px-6 py-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="flex justify-between p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6>Job List</h6>
                    <Link
                      to="/jobs/add"
                      className="px-6 py-3 font-bold text-center text-white align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-green-600 to-lime-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
                    >
                      New Jobs
                    </Link>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                        <thead className="align-bottom">
                          <tr>
                            <th className="px-6 py-3 pl-4 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Title
                            </th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Description
                            </th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Company
                            </th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Job Type
                            </th>
                            <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobs.map((job, index) => {
                            return (
                              <tr key={index}>
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <div className="flex px-2 py-1">
                                    <div className="flex flex-col justify-center">
                                      <h6 className="mb-0 text-sm leading-normal">{job.title}</h6>
                                      <p className="mb-0 text-xs leading-tight text-slate-400">Author Id: {job.authorId}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b shadow-transparent">
                                  <p className="mb-0 text-xs leading-tight text-slate-400">{job.description}</p>
                                </td>
                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <p className="mb-0 text-xs font-semibold leading-tight">{job.companyId}</p>
                                </td>
                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  {job.jobType === "full time" ? (
                                    <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                      {job.jobType}
                                    </span>
                                  ) : (
                                    <span className="bg-gradient-to-tl from-blue-600 to-cyan-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                      {job.jobType}
                                    </span>
                                  )}
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <Link to={"/jobs/edit/" + job.id} href="" className="text-xs font-semibold leading-tight text-blue-500">
                                    Edit
                                  </Link>

                                  <a
                                    onClick={(e) => deleteHandler(e, job.id)}
                                    href=""
                                    className="text-xs font-semibold leading-tight text-red-500 ml-2"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
