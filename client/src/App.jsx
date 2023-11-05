import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
