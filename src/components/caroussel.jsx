import React from "react";
import logoOn from '../assets/IMG/carrousel-on.png';
import logoOff from '../assets/IMG/carrousel-off.png';
import visuel1 from '../assets/IMG/caroussel/visuel_desktop_01.webp';
import visuel2 from '../assets/IMG/caroussel/visuel_desktop_02.webp';
import visuel3 from '../assets/IMG/caroussel/visuel_desktop_03.webp';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



let Caroussel = function() {
    return(
        <div className="caroussel">
            <img className="caroussel__logoOff" src={logoOff} alt="logo"/>
            <img className="caroussel__logoOn" src={logoOn} alt='logo'/>
            <div className="caroussel__overlay"/>
            <>
              <Swiper
                  modules={[Autoplay]}
                  speed={2000}
                  loop
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  className='caroussel__swiper'>

                <SwiperSlide><img src={visuel1} alt="visuel1" /></SwiperSlide>
                <SwiperSlide><img src={visuel2} alt="visuel2" /></SwiperSlide>
                <SwiperSlide><img src={visuel3} alt="visuel3" /></SwiperSlide>
              </Swiper>
          </>
        </div>
    )
}

export default Caroussel;