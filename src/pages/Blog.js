import React from "react";
import AdminLayout from "../component/AdminLayout/AdminLayout";
import MainImg from "../component/MainImg";
import ThumnailImg from "../component/ThumnailImg";

function Blog() {
  return (
    <>
      <AdminLayout lefttitle="add blog">
        <form action="">
          <div className="admin_div blog_div1">
            <div className="child child1">
              <ThumnailImg />
            </div>
            <div className="child child2">
              <MainImg />
            </div>
            <div className="child child3">
              <input
                type="text"
                className="input_field_c w-100 border mb-2 mb-md-4 px-4"
                placeholder="Enter Title"
              />
              <input
                type="text"
                className="input_field_c w-100 border mb-2 mb-md-4 px-4"
                placeholder="Add Keywords tags"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="input_field_c w-100 border mb-2 mb-md-4 px-4"
                placeholder="Enter Description"
              />
              <div className="text-center text-md-end mt-2 mt-md-3">
                <button className="btn_one py-2 px-3 py-md-3 px-md-5">
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </AdminLayout>
    </>
  );
}

export default Blog;
