import { useEffect, useRef } from "react";
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

  return (
    <>
      <SideNav sidenavToggleHandler={sidenavToggleHandler} />
      <Outlet context={{ sidenavToggleHandler }} />
    </>
  );
}

export default App;
