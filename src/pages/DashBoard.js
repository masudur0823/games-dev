import AdminLayout from "../component/AdminLayout/AdminLayout";
import gallary from "../assets/images/icons/gallery.svg"
import DashSlider from "../component/DashSlider";

function DashBoard() {
  return (
    <>
      <AdminLayout lefttitle="dashboard">
        <div className="dash_div1 admin_div">

          {/* child1 */}
          <div className="input_file_area">
            <input type="file" name="" id="" />
            <div className="input_image_main">
              <img src={gallary} alt="" className="input_file_img" />
              <h5 className="input_desc mt-4">
                Add Slider <br />
                Images
              </h5>
              <p className="input_file_im_text mt-5">
                Minimum Size <br />
                1000 x 600px
              </p>
            </div>
          </div>
          {/* child1 */}

          {/* child2 */}
          <div className="dash_div1_child2">
            <DashSlider />
          </div>
          {/* child2 */}

        </div>

        <div className="dash_div2 admin_div">
          <div className="dash_div2_header">
            <h4 className="dash_slider_title">Blogs (02)</h4>
            <button className="btn_one px-4">Add Blog</button>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export default DashBoard;
