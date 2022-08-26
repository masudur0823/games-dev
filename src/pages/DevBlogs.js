import React from "react";
import Banner from "../component/Banner";
import img from "../assets/images/jumanji.png";
import calender from "../assets/images/icons/calendar.svg";
function DevBlogs() {
  return (
    <>
      <>
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

              <div className="d-flex flex-column flex-md-row gap-4 devBlog_card">
                <img src={img} className="devBlog_image" alt="" />
                <div>
                  <button>Latest Blog</button>
                  <h1 className="title mt-3 mb-2">Jumanji World</h1>
                  <p className="desc">
                    Will you play the game, or will the game play you? Find out
                    in JUMANJI: The Video Game, Coming November 15th to
                    PlayStation 4.
                  </p>
                  <p className="date">
                    <img src={calender} alt="" /> Dec 4, 2019
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-4 devBlog_card">
                <img src={img} className="devBlog_image" alt="" />
                <div>
                  <button>Latest Blog</button>
                  <h1 className="title mt-3 mb-2">Jumanji World</h1>
                  <p className="desc">
                    Will you play the game, or will the game play you? Find out
                    in JUMANJI: The Video Game, Coming November 15th to
                    PlayStation 4.
                  </p>
                  <p className="date">
                    <img src={calender} alt="" /> Dec 4, 2019
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-4 devBlog_card">
                <img src={img} className="devBlog_image" alt="" />
                <div>
                  <button>Latest Blog</button>
                  <h1 className="title mt-3 mb-2">Jumanji World</h1>
                  <p className="desc">
                    Will you play the game, or will the game play you? Find out
                    in JUMANJI: The Video Game, Coming November 15th to
                    PlayStation 4.
                  </p>
                  <p className="date">
                    <img src={calender} alt="" /> Dec 4, 2019
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default DevBlogs;
