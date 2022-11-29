// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./HighlightedCards.scss";
import FirstSlide from "../../../../assets/imgs/highlighted.svg";
import SecondSlide from "../../../../assets/imgs/slide.png";
import ThirdSlide from "../../../../assets/imgs/slide3.jpg";

const HighlightedProduct = () => {
  const pagination = {
    clickable: true,
  };
  const mousewheel = {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  };
  return (
    <div className="highlighted">
      <Swiper
        pagination={pagination}
        mousewheel={mousewheel}
        slidesPerView={1}
        loop={true}
        modules={[Mousewheel, Pagination]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide slide1">
          <div className="first-slide">
            <div className="slide-img">
              <img src={FirstSlide} alt="" />
            </div>
            <div className="slide-info">
              <h3>
                Buy & Sell <br /> What's Now & Next
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                distinctio quam praesentium blanditiis ex perspiciatis?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide slide2">
          <div className="second-slide">
            <div className="slide-img">
              <img src={SecondSlide} alt="" />
            </div>
            <div className="slide-info">
              <h3>
                Buy & Sell <br /> What's Now & Next
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                distinctio quam praesentium blanditiis ex perspiciatis?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide slide3">
          <div className="third-slide">
            <div className="slide-img">
              <img src={ThirdSlide} alt="" />
            </div>
            <div className="slide-info">
              <h3>
                Buy & Sell <br /> What's Now & Next
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                distinctio quam praesentium blanditiis ex perspiciatis?
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HighlightedProduct;
