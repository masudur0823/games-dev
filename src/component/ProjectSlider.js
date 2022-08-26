import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// slider image
import si1 from "../assets/images/projectImg1.png";
import si2 from "../assets/images/projectImg2.png";
// slider image

// button
import newsPrev from "../assets/images/icons/left-arrow.svg";
import newsNext from "../assets/images/icons/right-arrow.svg";
// button

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    <img src={si1} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si2} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si1} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si2} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si1} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si2} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si1} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si2} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si1} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si2} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si1} className="projectImg" alt="" />
  </div>,
  <div className="item" data-value="1">
    <img src={si2} className="projectImg" alt="" />
  </div>,
];

const navItem = (item, i) => {
  return <i key={i} onClick={() => this.Carousel.slideTo(i)} />;
};

class ProjectSlider extends Component {
  render() {
    return (
      <div className="projectSlider">
        <AliceCarousel
          // autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={3000}
          animationDuration={1000}
          infinite
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          ref={(el) => (this.Carousel = el)}
        />
        <nav>{items.map(navItem)}</nav>
        <div className="text-center pt-3 pt-md-5">
          <img
            src={newsPrev}
            className="p_sliderBtn"
            onClick={() => this.Carousel.slidePrev()}
            alt=""
          />
          <img
            src={newsNext}
            className="p_sliderBtn"
            onClick={() => this.Carousel.slideNext()}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default ProjectSlider;
