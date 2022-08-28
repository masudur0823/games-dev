import React from "react";
import { Link } from "react-router-dom";
import calender from "../assets/images/icons/calendar.svg";

function DevBlogsCard() {
  const data = [
    {
      id:'1',
      title: "Jumanji World",
      desc: " Will you play the game, or will the game play you? Find out in JUMANJI: The Video Game, Coming November 15th to PlayStation4.",
      img: require('../assets/images/jumanji.png'),
      date: ' Dec 4, 2019'
    },
    {
      id:'2',
      title: "Jumanji World2",
      desc: " Will you play the game, or will the game play you? Find out in JUMANJI: The Video Game, Coming November 15th to PlayStation4.",
      img: require('../assets/images/shadowFIght3.png'),
      date: ' Dec 5, 2019'
    },
    {
      id:'3',
      title: "Jumanji World2",
      desc: " Will you play the game, or will the game play you? Find out in JUMANJI: The Video Game, Coming November 15th to PlayStation4.",
      img: require('../assets/images/shadowFIght3.png'),
      date: ' Dec 6, 2019'
    },
  ];
  return (
    <>
      {data.map((d) => (
        <>
          <Link to="/devblogsDetails" className="devBlog_card_a">
            <div className="d-flex flex-column flex-md-row gap-4 devBlog_card">
              <img src={d.img} className="devBlog_image" alt="" />
              <div>
                <button>Latest Blog</button>
                <h1 className="title mt-3 mb-2 text-dark">{d.title}</h1>
                <p className="desc">{d.desc}</p>
                <p className="date">
                  <img src={calender} alt="" /> {d.date}
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
