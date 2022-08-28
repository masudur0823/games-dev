import React from "react";
import AdminLayout from "../component/AdminLayout/AdminLayout";
import lock from "../assets/images/icons/lock.svg";
import eye from "../assets/images/icons/eye.svg";

function ChangePassword() {
  return (
    <AdminLayout lefttitle="Change Password">
      <div className="admin_div">
        <h1 className="para_one fw-bold mb-3">Enter Current Password</h1>

        <div className="col-md-6">
          <div className="position-relative">
            <input
              type="password"
              className="input_field_c w-100 border"
              placeholder="Enter Current Password"
            />
            <img src={lock} className="input_icon_left" alt="" />
            <button class="input_right_icon">
              <img src={eye} class="cursor-pointer" alt="" />
            </button>
          </div>
        </div>

        <hr className="horizontal_line" />

        <h1 className="para_one fw-bold mb-3">Enter New Password</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="position-relative">
              <input
                type="password"
                className="input_field_c w-100 border"
                placeholder="Enter New Password"
              />
              <img src={lock} className="input_icon_left" alt="" />
              <button class="input_right_icon">
                <img src={eye} class="cursor-pointer" alt="" />
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="position-relative">
              <input
                type="password"
                className="input_field_c w-100 border"
                placeholder="Confirm New Password"
              />
              <img src={lock} className="input_icon_left" alt="" />
              <button class="input_right_icon">
                <img src={eye} class="cursor-pointer" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ChangePassword;
