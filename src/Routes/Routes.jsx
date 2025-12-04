import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import PrivetRouter from "../Provider/PrivetRouter";
import ToyDetails from "../Pages/ToyDetails";

import ForgetPassword from "../Pages/ForgetPassword";
import WishList from "../Pages/WishList";
import AllToys from "../Pages/AllToys";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import FAQ from "../Pages/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
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
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/toyDetails/:id",
        element: <ToyDetails></ToyDetails>,
      },
      {
        path: "/all-items",
        element: <AllToys></AllToys>
      },
      {
        path: "/about-us",
        element: <About></About>
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/profile",
        element: (
          <PrivetRouter>
            <Profile></Profile>
          </PrivetRouter>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivetRouter>
            <WishList></WishList>
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
