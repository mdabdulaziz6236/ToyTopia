import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import HomeSlider from "../Components/HomeSlider";

const Home = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div>
      <HomeSlider></HomeSlider>
    </div>
  );
};

export default Home;
