import React from "react";
import "./style.css";

export const EventSpaces = (props) => {
  return (
    <div className="event-spaces-container">
      <img className="event-spaces-image" src="img/eventspace background.png" alt="Event Space" />
      <div className="event-spaces-content">
        <h3 className="event-spaces-title">A unique and versatile space</h3>
        <p className="event-spaces-description">
          Available for hire for members and non-members working in the
          innovation sector. Science Creates has a variety of event spaces that
          can cater for a diverse range of events.
        </p>
        <button className="event-spaces-button" type="button">
          Event Spaces
        </button>
      </div>
    </div>
  );
};
