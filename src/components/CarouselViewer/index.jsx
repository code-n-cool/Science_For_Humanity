import React from "react";
import "./style.css"; // Import the CSS file

export const CarouselViewer = (props) => {
  return (
    <div
      className="carousel-viewer"
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <div className="carousel-container">
        {props.content.map((value, index) => (
          <div
            className="carousel-item"
            style={{
              width: props.itemWidth,
              left: `${50 + props.itemDeltaWidth * (index - props.current)}%`,
            }}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
