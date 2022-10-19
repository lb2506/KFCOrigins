import React from "react";
import logoOn from '../assets/IMG/carrousel-on.png'
import visuel1 from '../assets/IMG/caroussel/visuel_desktop_01.webp';
import visuel2 from '../assets/IMG/caroussel/visuel_desktop_02.webp';
import visuel3 from '../assets/IMG/caroussel/visuel_desktop_03.webp';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

let Caroussel = function() {
    return(
        <div className="caroussel">
            <h1 className="caroussel__logo"><img src={logoOn} alt='logo'/></h1>
            <div className="caroussel__overlay"/>
            <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="caroussel__swiper"
      >
        <SwiperSlide><img src={visuel1} alt='KFC'/></SwiperSlide>
        <SwiperSlide><img src={visuel2} alt='KFC'/></SwiperSlide>
        <SwiperSlide><img src={visuel3} alt='KFC'/></SwiperSlide>
      </Swiper>
    </>
        </div>
    )
}

export default Caroussel;