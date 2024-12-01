import React from "react";
import { Event } from "./event";

export const Events = (props) => {
  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        gap: "40px",
      }}
    >
      <Event image="img/card background-1.png"></Event>
      <Event image="img/card background-2.png"></Event>
    </div>
  );
};
