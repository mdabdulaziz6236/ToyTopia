
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MyContainer from "../Components/MyContainer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
       <Navbar ></Navbar>
      <MyContainer className="flex-1">
        <Outlet></Outlet>
      </MyContainer>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
