import React from "react";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "./style.css";


export const Goals = (props) => {
  return (
    <Carousel
      autoPlay
      transitionTime={500}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={33.33}
      showArrows={true}
      showIndicators={false}
      swipeable={true}
      emulateTouch={true}
      showThumbs={false}
      dynamicHeight={false}
      useKeyboardArrows
    >
      {props.data &&
        props.data.images.map((img, index) => (
          <div key={index}>
            <img src={img} />
          </div>
        ))}
    </Carousel>
  );
};
