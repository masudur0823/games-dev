import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children, lefttitle }) {
  const [show, setShow] = useState("-1000px");
  const handleClose = () => {
    setTimeout(() => {
      setShow("-1000px");
    }, 500);
  };

  const handleClose1 = () => {
    setShow("-1000px");
  }
  const handleOpen = () => {
    setShow("0px");
  };
  return (
    <>
      <div className="admin_layout_bg">
        <div className="admin_mobile_arrow" onClick={handleOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              d="m12.55 37.15-3.3-3.3 9.9-9.9-9.9-9.9 3.3-3.3 13.2 13.2Zm13.1 0-3.3-3.3 9.9-9.9-9.9-9.9 3.3-3.3 13.2 13.2Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div
          className="admin_overlay"
          onClick={handleClose1}
          style={{ left: show }}
        >
          <p className="close_icon">X</p>
        </div>
        <div className="admin_container">
          <div className="admin_layout">
            <div className="admin_layout_child1" style={{ left: show }}>
              <AdminSidebar handleClose={handleClose} />
            </div>
            <div>
              <AdminHeader title={lefttitle} />
              <div className="admin_layout_inner_child">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
