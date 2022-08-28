import React from "react";
import Layout from "../component/Layout/Layout";
import img from "../assets/images/blog_details_image.png";
import calender from "../assets/images/icons/calendar.svg";

function DevBlogDetails() {
  return (
    <Layout>
      <div className="container my-4 my-md-5 devBlogDetails">
        <img src={img} className="w-100" alt="" />
        <h1 className="title mt-5 mb-4">Jumanji World</h1>
        <p className="date">
          <img src={calender} alt="" /> 15 May 2020
        </p>
        <div className="d-flex flex-wrap gap-3 my-4">
          <button className="btn_two px-3 px-md-5">Game</button>
          <button className="btn_two px-3 px-md-5">Jumanji World</button>
          <button className="btn_two px-3 px-md-5">Ps5</button>
        </div>
        <p className="desc">
          Stalking lions, charging rhinos, snapping crocodiles, and other
          dangerous creatures—in the wild world of Jumanji, they’re only a die
          roll away! Grab your pawn, roll the eight-sided number die and move
          through the jungle. Draw a danger card, then use your decoder to
          discover the secret message and see if disaster strikes. Your fellow
          players must race against time to rescue you. The jungle threatens and
          begins to fill up the Doomsday Grid. If the grid fills up, the jungle
          will overpower you and your fellow players—everyone loses. If you are
          the first to reach the center before the Doomsday Grid fills up, yell
          "Jumanji!" and win!
        </p>
      </div>
      <div className="p-5"></div>
    </Layout>
  );
}

export default DevBlogDetails;
