import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <h1
          className="custom-heading"
          style={{
            position: "absolute",
            top: "30%",
            left: "10%",
            fontSize: "100pt",
          }}
        >
          {props.data ? props.data.title1 : "Loading"}
          <span></span>
        </h1>
        <h1
          className="custom-heading"
          style={{
            position: "absolute",
            top: "48%",
            right: "10%",
            fontSize: "100pt",
          }}
        >
          {props.data ? props.data.title2 : "Loading"}
          <span></span>
        </h1>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "10%",
            fontWeight: "bold",
          }}
        >
          <img style={{width:"45px", height:"45px"}} src="img/icons/flower.svg"></img>
          <img style={{width:"45px", height:"45px"}} src="img/icons/heart.svg"></img>
          <img style={{width:"45px", height:"45px"}} src="img/icons/earth.svg"></img>
          <img style={{width:"45px", height:"45px"}} src="img/icons/union.svg"></img>
        </div>
        <p
          style={{
            position: "absolute",
            bottom: "3%",
            left: "10%",
            fontWeight: "bold",
          }}
        >
          FROM DISCOVERIES
          <br />
          TO INVENTIONS
        </p>
        <p
          style={{
            position: "absolute",
            bottom: "3%",
            right: "10%",
          }}
        >
          Explore
        </p>
      </div>
    </header>
  );
};
