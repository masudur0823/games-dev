import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import editIcon from '../assets/images/icons/edit.svg';
import delIcon from '../assets/images/icons/delete.svg';

// slider image
import si1 from "../assets/images/shadowFIght3.png";
import si2 from "../assets/images/games.png";
// slider image

// button
import arrow from '../assets/images/icons/arrow-square-left.svg'
// button

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 2 },
};

const items = [
    <div className="item" data-value="1">
        <a href="#!" className="position-relative">
            <img src={si1} className="dashImg" alt="" />
            <div className="das_slider_btn">
                <button><img src={editIcon} alt="" /> Edit</button>
                <button><img src={delIcon} alt="" /> Delete</button>
            </div>
        </a>
    </div>,
    <div className="item" data-value="1">
        <a href="#!" className="position-relative">
            <img src={si2} className="dashImg" alt="" />
            <div className="das_slider_btn">
                <button><img src={editIcon} alt="" /> Edit</button>
                <button><img src={delIcon} alt="" /> Delete</button>
            </div>
        </a>
    </div>,
    <div className="item" data-value="1">
        <a href="#!" className="position-relative">
            <img src={si1} className="dashImg" alt="" />
            <div className="das_slider_btn">
                <button><img src={editIcon} alt="" /> Edit</button>
                <button><img src={delIcon} alt="" /> Delete</button>
            </div>
        </a>
    </div>,
    <div className="item" data-value="1">
        <a href="#!" className="position-relative">
            <img src={si2} className="dashImg" alt="" />
            <div className="das_slider_btn">
                <button><img src={editIcon} alt="" /> Edit</button>
                <button><img src={delIcon} alt="" /> Delete</button>
            </div>
        </a>
    </div>,
];

const navItem = (item, i) => {
    return <i key={i} onClick={() => this.Carousel.slideTo(i)} />;
};

class DashSlider extends Component {
    render() {
        return (
            <>
                <div className="d-flex align-items-center flex-wrap gap-2 gap-sm-4">
                    <h4 className="dash_slider_title">Main Slider (02)</h4>
                    <div className="d-flex align-items-center gap-4">
                        <img src={arrow} onClick={() => this.Carousel.slidePrev()} className="dash_slider_arrow" alt="" />
                        <img src={arrow} onClick={() => this.Carousel.slideNext()} className="dash_slider_arrow arrow_right" alt="" />
                    </div>
                    <div className="projectSlider">

                    </div>
                </div>
                <div className="dashSlider mt-2 mt-sm-4">
                    <AliceCarousel
                        // autoWidth
                        // infinite
                        mouseTracking={false}
                        disableDotsControls
                        disableButtonsControls
                        items={items}
                        responsive={responsive}
                        ref={(el) => (this.Carousel = el)}
                    />
                    <nav>{items.map(navItem)}</nav>

                </div>
            </>
        );
    }
}

export default DashSlider;
