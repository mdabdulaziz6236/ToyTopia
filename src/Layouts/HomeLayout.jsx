import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
// import { use } from "react";
// import { AuthContext } from "../Provider/AuthContext";
// import Loading from "../Components/Loading";

const HomeLayout = () => {
  // const { userLoading } = use(AuthContext);

  // if (userLoading) {
  //   return <Loading></Loading>;
  // }
  return (
    <div >
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
