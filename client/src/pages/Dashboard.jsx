import PropType from "prop-types";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function Dashboard({ onHamburgerButtonClick, jobs, fetchJobs, companies, fetchCompanies }) {
  Dashboard.propTypes = {
    onHamburgerButtonClick: PropType.func.isRequired,
    jobs: PropType.array.isRequired,
    fetchJobs: PropType.func.isRequired,
    companies: PropType.array.isRequired,
    fetchCompanies: PropType.func.isRequired,
  };

  useEffect(() => {
    fetchJobs();
    fetchCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Navbar onHamburgerButtonClick={onHamburgerButtonClick} title="Dashboard" />

        <div className="w-full px-6 py-6 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">Total Jobs</p>
                        <h5 className="mb-0 font-bold">
                          {jobs.length}
                          {/* <span className="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span> */}
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">Total Company</p>
                        <h5 className="mb-0 font-bold">
                          {companies.length}
                          {/* <span className="leading-normal text-sm font-weight-bolder text-lime-500">+3%</span> */}
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
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
