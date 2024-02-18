import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

const swiperConfig = {
  modules: [Pagination],
  className: "swiper__module",
  spaceBetween: 20,
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
};

function SwiperModule({ image }) {
  return (
    <>
      <Swiper {...swiperConfig}>
        {image.map((img, index) => (
          <SwiperSlide key={index} className="swiper__slide">
            <img loading="lazy" src={img.original} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperModule;
