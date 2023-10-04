import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1Photo from "../../../../img/hero/swiper/slide1.jpg"
import slide2Photo from "../../../../img/hero/swiper/slide2.jpg"
import slide3Photo from "../../../../img/hero/swiper/slide3.jpg"
import slide4Photo from "../../../../img/hero/swiper/slide4.jpg"

const HeroSwiper = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={slide1Photo} alt="slide-img" /></SwiperSlide>
      <SwiperSlide><img src={slide2Photo} alt="slide-img" /></SwiperSlide>
      <SwiperSlide><img src={slide3Photo} alt="slide-img" /></SwiperSlide>
      <SwiperSlide><img src={slide4Photo} alt="slide-img" /></SwiperSlide>
    </Swiper>
  );
};

export default HeroSwiper;
