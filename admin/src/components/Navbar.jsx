import PropType from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ sidenavToggleHandler, title }) {
  Navbar.propTypes = {
    title: PropType.string.isRequired,
    sidenavToggleHandler: PropType.func.isRequired,
  };

  const goto = useLocation().pathname.split("/")[1];

  return (
    <nav
      className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
      data-navbar-main="true"
      data-navbar-scroll="true"
    >
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
            <li className="text-sm leading-normal">
              <Link to={"/" + goto} className="opacity-50 text-slate-700">
                Pages
              </Link>
            </li>
            <li
              className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
              aria-current="page"
            >
              {title}
            </li>
          </ol>
          <h6 className="mb-0 font-bold capitalize">{title}</h6>
        </nav>

        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <div className="flex items-center md:ml-auto md:pr-4">
            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
              <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                placeholder="Type here..."
              />
            </div>
          </div>
          <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
            <li className="flex items-center">
              <Link className="px-0 py-2 text-sm font-semibold transition-all ease-nav-brand text-slate-500 flex items-center">
                <i className="fa fa-user sm:mr-1" aria-hidden="true"></i>
                <span className="sm:inline">
                  <h6 className="mb-0 text-sm leading-normal ml-2">Welcome</h6>
                  <p className="mb-0 text-xs leading-tight text-slate-400 ml-2">Username</p>
                </span>
              </Link>
            </li>
            <li className="flex items-center pl-4 xl:hidden">
              <a
                onClick={sidenavToggleHandler}
                href="#"
                className="block p-0 text-sm transition-all ease-nav-brand text-slate-500"
                data-sidenav-trigger
              >
                <div className="w-4.5 overflow-hidden">
                  <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                  <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                  <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                </div>
              </a>
            </li>
            <li className="flex items-center px-4">
              <Link className="p-0 text-sm transition-all ease-nav-brand text-slate-500">
                <i data-fixed-plugin-button-nav="true" className="cursor-pointer fa fa-cog" aria-hidden="true"></i>
              </Link>
            </li>

            <li className="relative flex items-center pr-2">
              <p className="hidden transform-dropdown-show"></p>
              <Link className="block p-0 text-sm transition-all ease-nav-brand text-slate-500" data-dropdown-trigger="true" aria-expanded="false">
                <i className="cursor-pointer fa fa-bell" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
