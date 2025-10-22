import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path:'',
        Component:Home
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/*",
    Component: <ErrorPage></ErrorPage>,
  },
]);
