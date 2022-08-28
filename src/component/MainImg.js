import React from "react";
import gallary from "../assets/images/icons/gallery.svg";

function MainImg() {
  return (
    <>
      <div className="input_file_area">
        <input type="file" name="" id="" />
        <div className="input_image_main">
          <img src={gallary} alt="" className="input_file_img" />
          <h5 className="input_desc mt-2 mt-md-3">Main Images</h5>
          <p className="input_file_im_text mt-3 mt-md-4">
            Minimum Size 270 x 200px
          </p>
        </div>
      </div>
    </>
  );
}

export default MainImg;
