import { React } from 'react';
import { useSwiper } from 'swiper/react';
import leftArrow from '../../assets/images/icons/left-arrow.svg'
export default function SlidePrevButton() {
    const swiper = useSwiper();

    return (
        <img
            src={leftArrow}
            onClick={() => swiper.slidePrev()}
            className="home_slider_arrow home_slider_prev_arrow"
            alt=""
        />
    );
}