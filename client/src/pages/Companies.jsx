import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";

export default function Companies() {
  const { sidenavToggleHandler, companies, fetchCompanies } = useOutletContext();

  useEffect(() => {
    fetchCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function deleteHandler(e, id) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/companies/" + id, {
        method: "delete",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application.json",
        },
      });
      if (!response.ok) {
        throw { name: "fetch_error" };
      }
      fetchCompanies();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Navbar sidenavToggleHandler={sidenavToggleHandler} title="Companies" />
        <div className="w-full px-6 py-6 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3">
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex justify-between p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <h6>Company List</h6>
                  <Link
                    to="/companies/add"
                    className="px-6 py-3 font-bold text-center text-white align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-green-600 to-lime-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
                  >
                    New Companies
                  </Link>
                </div>
                <div className="flex-auto px-0 pt-0 pb-2">
                  <div className="p-0 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-3 pl-4 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                            Name
                          </th>
                          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                            Location
                          </th>
                          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                            Email
                          </th>
                          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                            Description
                          </th>
                          <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {companies.map((company, index) => {
                          return (
                            <tr key={index}>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                  <div>
                                    <img
                                      src={company.logo}
                                      className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
                                      alt="company-logo"
                                    />
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 text-sm leading-normal">{company.name}</h6>
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b shadow-transparent">
                                <p className="mb-0 text-xs font-semibold leading-tight">{company.location}</p>
                              </td>
                              <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <p className="mb-0 text-xs font-semibold leading-tight">{company.email}</p>
                              </td>
                              <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b shadow-transparent">
                                <p className="mb-0 text-xs leading-tight text-slate-400">{company.description}</p>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <Link to={"/companies/edit/" + company.id} href="" className="text-xs font-semibold leading-tight text-blue-500">
                                  Edit
                                </Link>

                                <a
                                  onClick={(e) => deleteHandler(e, company.id)}
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
      </main>
    </>
  );
}
