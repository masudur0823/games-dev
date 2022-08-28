import React from "react";
import { Link } from "react-router-dom";
import calender from "../assets/images/icons/calendar.svg";

function DevBlogsCard() {
  const data = [
    {
      title: "Jumanji World",
      desc: " Will you play the game, or will the game play you? Find out in JUMANJI: The Video Game, Coming November 15th to PlayStation4.",
      img:'../assets/images/shadowFIght3.png'
    },
    {
      title: "Jumanji World2",
      desc: " Will you play the game, or will the game play you? Find out in JUMANJI: The Video Game, Coming November 15th to PlayStation4.",
      img:'../assets/images/shadowFIght3.png'
    },
  ];
  return (
    <>
      {data.map((d) => (
        <>
          <Link to="/devblogsDetails">
            <div className="d-flex flex-column flex-md-row gap-4 devBlog_card">
              <img src={d.img} className="devBlog_image" alt="" />
              <div>
                <button>Latest Blog</button>
                <h1 className="title mt-3 mb-2 text-dark">{d.title}</h1>
                <p className="desc">{d.desc}</p>
                <p className="date">
                  <img src={calender} alt="" /> Dec 4, 2019
                </p>
              </div>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}

export default DevBlogsCard;
