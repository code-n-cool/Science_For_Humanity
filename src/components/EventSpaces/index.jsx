import React from "react";

export const EventSpaces = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#231E1F",
        borderRadius: "10px",
        margin: "20px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        gap:"200px",
        padding:"20px"
      }}
    >
      <img
        style={{
          width: "50%",
        }}
        src="img/eventspace background.png"
      ></img>
      <div
        style={{
          width: "50%",
          position:"relative",
          borderTop:"1px solid white"
        }}
      >
        <p>A unique and versatile space</p>
        <p>
          Available for hire for members and non-members working in the
          innovation sector. Science Creates has a variety of event spaces that
          can cater for a diverse range of events.
        </p>
        <button style={{
            position:"absolute",
            bottom:"20px"
        }}>Event Spaces</button>
      </div>
    </div>
  );
};
