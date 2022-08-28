import React from "react";
import editIcon from "../assets/images/icons/edit.svg";
import delIcon from "../assets/images/icons/delete.svg";

function BlogCard() {
  const allData = [
    {
      id: "1",
      img: require("../assets/images/jumanji.png"),
      title: "Jumanji World",
      desc: "  Will you play the game, or will the game play you? Find out in JUMANJI: The Video Game, Coming November 15th to PlayStation 4.",
    },
    {
        id: "2",
        img: require("../assets/images/shadowFIght3.png"),
        title: "Shadow Fight 3",
        desc: "  Will you play the game, or will the game play you? Find out in JUMANJI: The Video Game, Coming November 15th to PlayStation 4.",
      },
  ];

  return (
    <>
      {allData.map((data) => (
        <>
          <div className="blog_card">
            <img src={data.img} className="blog_card_img" alt="" />
            <div>
              <h1 className="para_one fw-bold">{data.title}</h1>
              <h4 className="para_two mt-2" style={{ color: "#8F8F8F" }}>
                {data.desc}
              </h4>
              <div class="dbl_btn mt-4">
                <button>
                  <img src={editIcon} alt="" /> Edit
                </button>
                <button>
                  <img src={delIcon} alt="" /> Delete
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default BlogCard;
