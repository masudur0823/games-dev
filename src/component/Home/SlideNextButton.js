import { React } from 'react';
import { useSwiper } from 'swiper/react';
import rightArrow from '../../assets/images/icons/right-arrow.svg'
export default function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <img
            src={rightArrow}
            onClick={() => swiper.slideNext()}
            className="home_slider_arrow home_slider_next_arrow"
            alt=""
        />
    );
}