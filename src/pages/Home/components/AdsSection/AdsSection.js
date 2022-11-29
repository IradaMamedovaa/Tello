// @ts-nocheck
import React from 'react'
import "./AdsSection.scss"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Mousewheel, Pagination, Autoplay } from "swiper";
import Toshiba from "../../../../assets/imgs/icons/Toshiba.svg"
import Philips from "../../../../assets/imgs/icons/Philips.svg"
import Hp from "../../../../assets/imgs/icons/Hp.svg"
import ElectroLux from "../../../../assets/imgs/icons/ElectroLux.svg"
import Gorenje from "../../../../assets/imgs/icons/gorenje.svg"
import Bosch from "../../../../assets/imgs/icons/bosch.svg"
import Acer from "../../../../assets/imgs/icons/acer.svg"
import Rowenta from "../../../../assets/imgs/icons/rowenta.png"
import Tefal from "../../../../assets/imgs/icons/tefal.png"

const AdsSection = () => {
    
  const mousewheel = {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  }
  return (
    <div className='adsSection'>
        <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        loop={true}
        mousewheel={mousewheel}
        slidesPerView={"auto"}
        modules={[Autoplay,Mousewheel,Pagination]}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        className="ads-swiper"
      >
        <SwiperSlide >
            <div className="ad">
                <img src={Toshiba} alt="Toshiba" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ad">
                <img src={Philips} alt="Philips" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ad">
                <img src={Hp} alt="Hp" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ad">
                <img src={ElectroLux} alt="ElectroLux" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ad">
                <img src={Gorenje} alt="Gorenje" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ad">
                <img src={Bosch} alt="Bosch" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ad">
                <img src={Acer} alt="Acer" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ad">
                <img src={Rowenta} alt="Rowenta" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ad">
                <img src={Tefal} alt="Tefal" />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AdsSection