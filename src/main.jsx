import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import router from "./router/Router";
import LenisProvider from "./provider/LenisProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <LenisProvider>
    <RouterProvider router={router} />
  </LenisProvider>
);
