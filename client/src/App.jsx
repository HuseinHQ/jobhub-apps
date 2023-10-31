import { useEffect, useRef, useState } from "react";
import SideNav from "./components/SideNav";
import { Outlet } from "react-router-dom";

function App() {
  const sidenav = useRef(null);
  const sidenavTrigger = useRef(null);
  const sidenavCloseButton = useRef(null);
  const burger = useRef(null);
  const topBread = useRef(null);
  const bottomBread = useRef(null);

  useEffect(() => {
    sidenav.current = document.querySelector("aside");
    sidenavTrigger.current = document.querySelector("[data-sidenav-trigger]");
    sidenavCloseButton.current = document.querySelector("[data-sidenav-close]");
    burger.current = sidenavTrigger.current.firstElementChild;
    topBread.current = burger.current.firstElementChild;
    bottomBread.current = burger.current.lastElementChild;
  }, []);

  function sidenavToggleHandler() {
    sidenavCloseButton.current.classList.toggle("hidden");
    sidenav.current.classList.toggle("translate-x-0");
    sidenav.current.classList.toggle("shadow-soft-xl");

    topBread.current.classList.toggle("translate-x-[5px]");
    bottomBread.current.classList.toggle("translate-x-[5px]");
  }

  const [jobs, setJobs] = useState([]);
  async function fetchJobs() {
    try {
      let response = await fetch("http://localhost:3000/jobs");
      if (!response.ok) {
        throw { name: "fetch_error" };
      }
      response = await response.json();
      setJobs(response);
    } catch (error) {
      console.log(error);
    }
  }

  const [companies, setCompanies] = useState([]);
  async function fetchCompanies() {
    try {
      let response = await fetch("http://localhost:3000/companies");
      if (!response.ok) {
        throw { name: "fetch_error" };
      }
      response = await response.json();
      setCompanies(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SideNav sidenavToggleHandler={sidenavToggleHandler} />
      <Outlet context={{ jobs, fetchJobs, companies, fetchCompanies, sidenavToggleHandler }} />
    </>
  );
}

export default App;
