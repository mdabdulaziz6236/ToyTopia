import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import useToys from "../Hooks/useToys";
// import useToys from "../Hooks/useToys";
import Loading from "../Components/Loading";

const HomeSlider = () => {
  const { toys, loading } = useToys();

  if (loading) return <Loading></Loading>

  return (
    <div className=" rounded-3xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        
        spaceBetween={10} 
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1200}
        pagination={{ clickable: true }}
        style={{ '--swiper-pagination-color': '#ec4899' }}
      >
        {toys.slice(0, 6).map((toy) => (
          <SwiperSlide key={toy.toyId}>
            <div className="relative z-0 rounded-2xl overflow-hidden">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-[400px] object-cover brightness-75 transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Text overlay */}
              <div className="absolute bottom-6 left-6 max-w-lg text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
                  {toy.toyName}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
