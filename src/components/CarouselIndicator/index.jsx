import React, { useEffect } from "react";
import "./style.css";
import classNames from "classnames";

export const CarouselIndicator = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setValue((props.value + 1) % props.content.length);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [props.value]);
  return (
    <div
      className={
        props.whiteTheme ? "carousel-indicator white" : "carousel-indicator"
      }
    >
      <div className="arrow">
        <img
          onClick={() => {
            props.setValue(
              (props.value - 1 + props.content.length) % props.content.length
            );
          }}
          src="img/carousel/arrow_forward.png"
        ></img>
        <img
          onClick={() => {
            props.setValue((props.value + 1) % props.content.length);
          }}
          src="img/carousel/arrow_next.png"
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
