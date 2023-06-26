import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import ProjectPreview from "../pages/ProjectPreview";
import ErrorPage from "../pages/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProjectPreview />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default appRouter;
