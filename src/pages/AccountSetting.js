import React from "react";
import AdminLayout from "../component/AdminLayout/AdminLayout";
import userIcon from "../assets/images/icons/userIcon.svg";
import editIcon from "../assets/images/icons/edit_grey.svg";
import sms from "../assets/images/icons/sms.svg";
import call from "../assets/images/icons/call.svg";

function AccountSetting() {
  return (
    <AdminLayout lefttitle="Account Setting">
      <div className="admin_div">
        <div className="text-center">
          <div className="userIcon_area">
            <img src={userIcon} className="userIcon" alt="" />
            <p className="para_two text-dark-grey text-decoration-underline mt-3">
              Add Profile Image
            </p>
            <input type="file" name="" id="" className="user_input_file" />
          </div>
        </div>

        <div className="row mt-3 mt-md-5 g-4">
          <div className="col-md-6">
            <div className="position-relative">
              <input
                type="text"
                className="input_field_c w-100 border"
                placeholder="First Name"
              />
              <img src={editIcon} className="input_icon_left" alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="position-relative">
              <input
                type="text"
                className="input_field_c w-100 border"
                placeholder="Last Name"
              />
              <img src={editIcon} className="input_icon_left" alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="position-relative">
              <input
                type="email"
                className="input_field_c w-100 border"
                placeholder="Email"
              />
              <img src={sms} className="input_icon_left" alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="position-relative">
              <input
                type="number"
                className="input_field_c w-100 border"
                placeholder="Phone"
              />
              <img src={call} className="input_icon_left" alt="" />
            </div>
          </div>
        </div>
        <div className="text-center text-md-end mt-4 mt-md-5">
          <button className="btn_one py-2 px-3 py-md-3 px-md-5 btn_w_100">Update</button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AccountSetting;
