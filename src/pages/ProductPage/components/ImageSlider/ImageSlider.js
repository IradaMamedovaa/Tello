import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ImageSlider.scss";

import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductImages({ images, selectedImg }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-images">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images &&
          images?.map((item) => {
            if (selectedImg) {
              return selectedImg.map((itemm) => {
                if (itemm === item.id) {
                  return (
                    <SwiperSlide key={Math.random()}>
                      <img src={item.url} alt="logo" />
                    </SwiperSlide>
                  );
                }
              });
            } else {
              return (
                <SwiperSlide key={Math.random()}>
                  <img src={item.url} alt="logo" />
                </SwiperSlide>
              );
            }
          })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images &&
          images?.map((item) => {
            if (selectedImg) {
              return selectedImg.map((itemm) => {
                if (itemm === item.id) {
                  return (
                    <SwiperSlide className="selectImg" key={Math.random()}>
                      <img src={item.url} alt="logo" />
                    </SwiperSlide>
                  );
                }
              });
            } else {
              return (
                <SwiperSlide className="selectImg" key={Math.random()}>
                  <img src={item.url} alt="logo" />
                </SwiperSlide>
              );
            }
          })}
      </Swiper>
    </div>
  );
}

export default ProductImages;

{
  /* <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-up"
      >
        {images &&
          images?.map((item) => (
            <SwiperSlide key={Math.random()}>
              <img src={item?.url} alt="productImg" />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <h1>Slide</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide</h1>
          </SwiperSlide><SwiperSlide>
            <h1>Slide</h1>
          </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={5}
        slidesPerView={7}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-down"
      >
        {images &&
          images?.map((item) => (
            <SwiperSlide key={Math.random()}>
              <img src={item?.url} alt="productImg" />
            </SwiperSlide>
          ))}
            <SwiperSlide>
            <h1>Slide</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide</h1>
          </SwiperSlide><SwiperSlide>
            <h1>Slide</h1>
          </SwiperSlide>
      </Swiper> */
}
