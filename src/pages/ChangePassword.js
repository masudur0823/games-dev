import React from "react";
import AdminLayout from "../component/AdminLayout/AdminLayout";
import lock from "../assets/images/icons/lock.svg";
import eye from "../assets/images/icons/eye.svg";
import { TickSqure } from "../component/Icon/TickSqure";

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
        <div className="row g-4">
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

        <div className="row mt-5">
          <div className="col-md-6">
            <h5 className="para_two text-dark-grey">Password must contain :</h5>
            <ul className="list-unstyled changepass_ul">
              <li className="cp_matching_item">
                <TickSqure />
                Atleast 6 Character
              </li>
              <li>
                <TickSqure />
                Atleast 1 Uppercase Letter (A..Z)
              </li>
              <li>
                <TickSqure />
                Atleast 1 Lowercase Letter (a..z)
              </li>
              <li>
                <TickSqure />
                Atleast 1 Number (1..0)
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-start justify-content-md-end align-items-start">
            <button className="btn_one py-2 px-3 py-md-3 px-md-5 btn_w_100">Update</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ChangePassword;
