import HomeSlider from "../Components/HomeSlider";
import PopularToys from "../Components/PopularToys";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 min-h-screen">
      <title>Home</title>
      {/* Slider Section */}
      <div className=" lg:w-11/12 md:w-[90%] w-[93%] mx-auto pt-5 lg:pt-10">
        <HomeSlider />
      </div>

      {/* Popular Toys Section */}
      <div className="py-10 w-10/12 mx-auto">
        <PopularToys />
      </div>
    </div>
  );
};

export default Home;
