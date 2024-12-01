import React from "react";
import "./style.css";
import classNames from "classnames";

export const CarouselIndicator = (props) => {
  return (
    <div className="carousel-indicator">
      <div className="arrow">
        <img
          onClick={() => {
            props.setValue(
              (props.value - 1 + props.content.length) % props.content.length
            );
          }}
        ></img>
        <img
          onClick={() => {
            props.setValue((props.value + 1) % props.content.length);
          }}
        ></img>
      </div>
      <div className="indicators">
        {props.content.map((value, index) => (
          <div
            className={classNames("indicator", {
              selected: index === props.value,
            })}
            onClick={() => {
              props.setValue(index);
            }}
            key={value}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
