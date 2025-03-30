"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      modules={[EffectCards, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>5</SwiperSlide>
      <SwiperSlide>6</SwiperSlide>
      <SwiperSlide>7</SwiperSlide>
      <SwiperSlide>8</SwiperSlide>
      <SwiperSlide>9</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
