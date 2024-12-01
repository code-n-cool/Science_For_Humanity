import React from "react";

export const Event = (props) => {
  return (
    <div
      style={{
        width: "100%",
        border: "20px",
        backgroundColor: "#F4F4F4",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          width: "100%",
        }}
        src={props.image}
      ></img>
      <div
        style={{
          width: "100%",
          height: "16vw",
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            left: "30px",
            top: "30px",
          }}
        >
          Community Event
        </button>
        <img
          style={{
            width: "45px",
            height: "45px",
            position: "absolute",
            right: "30px",
            top: "30px",
          }}
          src="img/external_link_buttom.png"
        ></img>
        <p
          style={{
            padding: "80px 30px",
          }}
        >
          Old Market community mixer November edition
        </p>
      </div>
    </div>
  );
};
