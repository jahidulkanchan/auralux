import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout"
import HomePage from "../pages/home/HomePage"
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
       {
        path: "*",
        element: <ErrorPage />,
      },
      // {
      //   path: "/",
      //   element: <HomePage/>
      // }
    ],
  },
]);

export default router;
