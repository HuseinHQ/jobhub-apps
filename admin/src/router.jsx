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
import CreateCompanies from "./pages/CreateCompanies";
import UpdateCompanies from "./pages/UpdateCompanies";

const authProtect = () => {
  if (localStorage.access_token) {
    return false;
  } else {
    return redirect("/login");
  }
};

const cannotGoToLoginIfAlreadyLoggedIn = () => {
  if (localStorage.access_token) {
    return redirect("/");
  } else {
    return false;
  }
};

const router = createBrowserRouter([
  {
    path: "/login",
    loader: cannotGoToLoginIfAlreadyLoggedIn,
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
        path: "register",
        element: <RegisterPage />,
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
        path: "companies",
        element: <Companies />,
      },
      {
        path: "companies/add",
        element: <CreateCompanies />,
      },
      {
        path: "companies/edit/:id",
        element: <UpdateCompanies />,
      },
    ],
  },
]);

export default router;
