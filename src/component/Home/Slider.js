import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import img from '../../assets/images/slider1.png'
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";

function Slider() {
  return (
    <>
      <Swiper className="home-slider">
        <SlideNextButton/>
        <SlidePrevButton/>
        <SwiperSlide><img src={img} className="sliderImg" alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} className="sliderImg" alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} className="sliderImg" alt="" /></SwiperSlide>
        {/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button> */}
      </Swiper>
      
    </>
  )
}

export default Slider