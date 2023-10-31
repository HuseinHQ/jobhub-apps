import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import RegisterPage from "./pages/RegisterPage";
import Companies from "./pages/Companies";
import CreateJobs from "./pages/CreateJobs";
import UpdateJobs from "./pages/UpdateJobs";

const authProtect = () => {
  if (localStorage.access_token) {
    return false;
  } else {
    return redirect("/login");
  }
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/",
    element: <App />,
    loader: authProtect,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "jobs/add",
        element: <CreateJobs />,
      },
      {
        path: "jobs/edit/:id",
        element: <UpdateJobs />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "companies",
        element: <Companies />,
      },
    ],
  },
]);

export default router;
