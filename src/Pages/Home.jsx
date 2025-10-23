import HomeSlider from "../Components/HomeSlider";
import PopularToys from "../Components/PopularToys";

const Home = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Slider Section */}
      <div className="w-11/12 mx-auto pt-5 lg:pt-10">
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
