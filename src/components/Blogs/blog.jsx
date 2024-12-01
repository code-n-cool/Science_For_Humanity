import React from "react";
export const Blog = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "60px",
        margin: "20px",
      }}
    >
      <img
        src={props.image}
        style={{
          width: "30%",
        }}
      ></img>
      <div
        style={{
          width: "70%",
          borderBottom: "1px solid black",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
          }}
        >
          <p>{props.date}</p>
          <button>News</button>
        </div>
        <p>{props.title}</p>
        <img
          style={{
            width: "45px",
            height: "45px",
            position: "absolute",
            right: "0",
            bottom: "20px",
          }}
          src="img/external_link_buttom.png"
        ></img>
      </div>
    </div>
  );
};
