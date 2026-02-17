import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { locations } from "../assets/assets";
import Button from "./Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const CustomPrev = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#5856D6] shadow flex items-center justify-center text-white transition hover:bg-[#4b46c0]"
  >
    <FiChevronLeft size={24} />
  </button>
);
const Location = () => {




  const CustomNext = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#5856D6] shadow flex items-center justify-center text-white transition hover:bg-[#4b46c0]"
    >
      <FiChevronRight size={24} />
    </button>
  );

  const swiperRef = useRef(null);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className="px-4 sm:px-6 py-10 max-w-5xl mx-auto relative overflow-visible">
      {/* Heading */}
      <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-20 lg:px-32 mb-12">
        <h3 className="text-[#5856D6] text-sm sm:text-md mb-3 font-medium bg-[#B88D74]/10 px-3 py-1 rounded-md">
          Property Location
        </h3>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-lg">
          Explore Our Property Location
        </h2>
      </div>

      {/* Custom Arrows */}
     <button
  onClick={goPrev}
  className="absolute -left-7 top-[65%]  z-20 w-10 h-10 rounded-full bg-[#5856D6] shadow hidden md:flex items-center justify-center text-white transition -translate-y-1/2"
>
  <FiChevronLeft size={20} />
</button>

<button
  onClick={goNext}
  className="absolute -right-7 top-[65%]  z-20 w-10 h-10 rounded-full bg-[#5856D6] shadow hidden md:flex items-center justify-center text-white transition -translate-y-1/2"
>
  <FiChevronRight size={20} />
</button>



      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={16}
        slidesPerView={4}
        autoplay={{
          delay: 3000,  // 0.5 second for fast testing
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 12 },
          480: { slidesPerView: 1.5, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {locations.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative rounded-2xl overflow-hidden group shadow-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[220px] sm:h-[260px] lg:h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Count Badge */}
              <span className="absolute top-3 right-3 bg-white text-sm w-8 h-8 flex items-center justify-center rounded-full shadow">
                {item.count}
              </span>

              {/* City Name */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center w-full px-2">
                <Button
                  text={item.name}
                  className="bg-white px-4 sm:px-6 py-1 rounded-lg !text-[#030E0F] text-sm sm:text-base font-semibold shadow"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Location;
