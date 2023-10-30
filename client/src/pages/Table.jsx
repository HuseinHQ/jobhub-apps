import PropType from "prop-types";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function Table({ onHamburgerButtonClick, jobs, fetchJobs }) {
  Table.propTypes = {
    onHamburgerButtonClick: PropType.func.isRequired,
    jobs: PropType.array.isRequired,
    fetchJobs: PropType.func.isRequired,
  };

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Navbar onHamburgerButtonClick={onHamburgerButtonClick} title="Tables" />
        <div className="w-full px-6 py-6 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3">
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <h6>Job List</h6>
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
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                {/* <p className="mb-0 text-xs font-semibold leading-tight">Manager</p> */}
                                <p className="mb-0 text-xs leading-tight text-slate-400">{job.description}</p>
                              </td>
                              <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                {/* <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                  Online
                                </span> */}
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
                                <a href="" className="text-xs font-semibold leading-tight text-blue-500">
                                  {" "}
                                  Edit{" "}
                                </a>
                                <a href="" className="text-xs font-semibold leading-tight text-red-500 ml-2">
                                  {" "}
                                  Delete{" "}
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
      </main>
    </>
  );
}
