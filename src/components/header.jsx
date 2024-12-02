import React from "react";
import "./header.css"; // Import the CSS for Header styles

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <h1 className="custom-heading title1">
          {props.data ? props.data.title1 : "Loading"}
        </h1>
        <h1 className="custom-heading title2">
          {props.data ? props.data.title2 : "Loading"}
        </h1>
        <div className="icon-container">
          <img className="icon" src="img/icons/flower.svg" alt="flower" />
          <img className="icon" src="img/icons/heart.svg" alt="heart" />
          <img className="icon" src="img/icons/earth.svg" alt="earth" />
          <img className="icon" src="img/icons/union.svg" alt="union" />
        </div>
        <p className="discovery-text">FROM DISCOVERIES<br />TO INVENTIONS</p>
        <p className="explore-text">Explore</p>
      </div>
    </header>
  );
};
