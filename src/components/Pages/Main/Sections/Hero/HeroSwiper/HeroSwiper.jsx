import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "./hero-swiper.scss";

import slide1Photo from "../../../../../../img/hero/swiper/slide1.jpg";
import slide2Photo from "../../../../../../img/hero/swiper/slide2.jpg";
import slide3Photo from "../../../../../../img/hero/swiper/slide3.jpg";
import slide4Photo from "../../../../../../img/hero/swiper/slide4.jpg";

const HeroSwiper = () => {
  return (
    <div className="hero-slider__wrapper">
      <Swiper
        className="hero-slider"
        modules={[EffectCards, Pagination]}
        effect={"cards"}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        cardsEffect={{
          slideShadows: false,
          rotate: false,
          perSlideRotate: 0,
          perSlideOffset: 28,
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="hero-slider__slide">
          <img src={slide1Photo} alt="" className="hero-slider__img" />
        </SwiperSlide>
        <SwiperSlide className="hero-slider__slide">
          <img src={slide2Photo} alt="" className="hero-slider__img" />
        </SwiperSlide>
        <SwiperSlide className="hero-slider__slide">
          <img src={slide3Photo} alt="" className="hero-slider__img" />
        </SwiperSlide>
        <SwiperSlide className="hero-slider__slide">
          <img src={slide4Photo} alt="" className="hero-slider__img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
