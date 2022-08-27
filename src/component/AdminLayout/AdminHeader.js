import React from 'react';
import admin from '../../assets/images/admin_img.png'

export default function AdminHeader(props) {
  // console.log(props);
  return (
    <>
      <div className="admin_header">
        <div className="admin_header_inner">
          <h1>{props.title}</h1>
          <div className='d-flex gap-4 align-items-center'>
            <div>
                <p>Welcome</p>
                <h4 className='mt-1'>Jenny Wilson</h4>
            </div>
            <img src={admin} className="adminImg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
