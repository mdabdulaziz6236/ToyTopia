import BestSellingChoices from "../Components/BestSellingChoices";
import CategoryProducts from "../Components/CategoryProducts";
import HomeSlider from "../Components/HomeSlider";

import PopularToys from "../Components/PopularToys";
import SpecialOffer from "../Components/SpecialOffer";


const Home = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <title>Home</title>
      {/* Slider Section */}
      <div className=" lg:w-[70%] md:w-[90%] w-[70%] mx-auto pt-5 lg:pt-10">
        <HomeSlider />
      </div>

      {/* Popular Toys Section */}
      <div className="py-10 w-11/12 mx-auto">
        <PopularToys />
      </div>
   <div className=" w-11/12 lg:w-11/12 mx-auto">
    <CategoryProducts></CategoryProducts>
   </div>
   <div className=" w-11/12 lg:w-11/12 mx-auto">
    <SpecialOffer></SpecialOffer>
   </div>
   <div className="w-10/12 lg:w-8/12 mx-auto">
    <BestSellingChoices></BestSellingChoices>
   </div>
    </div>
  );
};

export default Home;
