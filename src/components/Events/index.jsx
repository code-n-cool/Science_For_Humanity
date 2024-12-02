import React from "react";
import { Event } from "./event";
import "./style.css";

export const Events = (props) => {
  return (
    <div className="events-container">
      <Event 
        image="img/card background-1.png" 
        content="Old Market community mixer November edition" 
      />
      <Event 
        image="img/card background-2.png" 
        content="Adult team building experience in the ScienceCreates learning lab" 
      />
    </div>
  );
};
