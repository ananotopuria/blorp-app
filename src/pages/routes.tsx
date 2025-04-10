import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import DownloadPage from "./downloadPage";
import HomePage from "./homePage";
import NotFoundPage from "./notFoundPage";
import LoginPage from "./loginPage";
import CreatePage from "./createPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/download",
        element: <DownloadPage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
