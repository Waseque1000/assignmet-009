import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main/Main.jsx";
import Home from "./Components/Home/Home/Home.jsx";
import Details from "./Components/Details/Details.jsx";
import Login from "./Components/Login/Login.jsx";
import Registar from "./Components/Register/Registar.jsx";
import AuthProviders from "./Provider/Authproviders.jsx";
import About from "./Components/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home />,
      },
      {
        path: `/details/:id`,
        loader: () => fetch("data.json"),
        element: <Details />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registar />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
