import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout"
import HomePage from "../pages/home/HomePage"
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "@/pages/about/AboutPage";
import ContactPage from "@/pages/contact/ContactPage";
import ServicePage from "@/pages/services/ServicePage";

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
       {
        path: "/contact",
        element: <ContactPage />,
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
