import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import PrivetRouter from "../Provider/PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <PrivetRouter>
          <Profile></Profile>
        </PrivetRouter>,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
