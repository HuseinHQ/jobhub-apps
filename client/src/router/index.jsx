import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import JobPage from "../pages/JobPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "jobs",
        element: (
          <>
            <JobPage />
          </>
        ),
        children: [
          {
            path: ":id",
            element: <h1>Ini Detail</h1>,
          },
        ],
      },
    ],
  },
]);

export default router;
