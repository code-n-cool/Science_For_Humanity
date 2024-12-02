import React from "react";
import "./style.css";

export const Event = (props) => {
  return (
    <div className="event-container">
      <img className="event-image" src={props.image} alt="Event" />
      <div className="event-details">
        <button className="event-button">Community Event</button>
        <img
          className="event-external-link"
          src="img/external_link_buttom.png"
          alt="External Link"
        />
        {props.content && <h3 className="event-content">{props.content}</h3>}
      </div>
    </div>
  );
};
