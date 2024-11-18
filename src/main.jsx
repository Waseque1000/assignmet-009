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
import Error from "./Components/Error/Error.jsx";
import PrivateRouts from "./Routes/Private/PrivateRouts.jsx";
import Startlearning from "./Components/StartLearning/Startlearning.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",

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
        path: "/learning",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRouts>
            <Startlearning></Startlearning>
          </PrivateRouts>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/dashboard",

        element: (
          <PrivateRouts>
            <Dashboard />
          </PrivateRouts>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
