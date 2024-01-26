import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export const SliderSwiper = ({imagenes}) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {imagenes?.map((imagen, index) => (
                    <SwiperSlide key={index}><img src={imagen} alt="" /></SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}