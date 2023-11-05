import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import JobPage from "../pages/JobPage";
import DetailPage from "../pages/DetailPage";
import NoDetailPage from "../pages/NoDetailPage";

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
            path: "",
            element: <NoDetailPage />,
          },
          {
            path: ":id",
            element: <DetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
