import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Navigation, Pagination, Autoplay } from "swiper";

const HomeSlider = () => {
  const slides = [
    { id: 1, title: "Lego Fun!", img: "https://i.ibb.co.com/9H4X8FxQ/kids-spelled-word-with-plastic-blocks-background.jpg" },
    { id: 2, title: "Doll Collection", img: "https://i.ibb.co.com/DfJ079gT/close-up-adorable-amigurumi-duck.jpg" },
    { id: 3, title: "Puzzle Time", img: "https://i.ibb.co.com/zHRbWN6w/images-1.jpg" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-96">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full object-cover "
            />
            <h2 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
              {slide.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
