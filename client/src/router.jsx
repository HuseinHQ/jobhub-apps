import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import RegisterPage from "./pages/RegisterPage";
import Companies from "./pages/Companies";
import CreateJobs from "./pages/CreateJobs";

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
        path: "jobs/:id",
        element: <CreateJobs />,
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
