import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import {
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

export const SliderSwiper = ({ imagenes }) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Pagination, Autoplay, EffectCoverflow]} // Include Autoplay in modules
        autoplay={{ delay: 3000 }} // Set autoplay options
        className="mySwiper"
      >
        {imagenes?.map((imagen, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <img src={imagen} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
