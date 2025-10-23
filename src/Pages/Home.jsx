import HomeSlider from "../Components/HomeSlider";
import PopularToys from "../Components/PopularToys";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto my-10  ">
        <HomeSlider></HomeSlider>
      </div>
      <div className="py-10 w-10/12 mx-auto">
        <PopularToys></PopularToys>
      </div>
    </div>
  );
};

export default Home;
