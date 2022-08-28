import React from "react";
import Banner from "../component/Banner";
import Layout from "../component/Layout/Layout";
import DevBlogsCard from "../component/DevBlogsCard";
function DevBlogs() {
  return (
    <Layout>
      <div className="container">
        <Banner title="Dev Blogs" />
        <div className="devBlogs_main">
          <div>
            <p className="para_one fw-bold all_post_text">All Post</p>
            <ul className="list-unstyled para_one devblogs_ul">
              <li>Pet Simulator X!</li>
              <li>Big PaintBall</li>
              <li>Pet Simulator 2!</li>
              <li>Build & Survive!</li>
              <li>Pet Simulator 1!</li>
              <li>Others</li>
            </ul>
          </div>
          <div>
            <DevBlogsCard/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DevBlogs;
