import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Before from "./Components/Before.jsx";
import UserRegister from "./Components/UserRegister.jsx";
import Companies from "./Components/Companies.jsx";
import { CompanyRegister } from "./Components/CompanyRegister.jsx";

const routList = createBrowserRouter([
  {
    path: "/",
    element: <UserRegister />,
  },
  {
    path: "/user",
    element: <UserRegister />,
  },
  {
    path: "/companyregister",
    element: <CompanyRegister />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routList} />
  </StrictMode>,
);
