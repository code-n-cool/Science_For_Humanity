import { useState } from "react";
import { CarouselIndicator } from "./CarouselIndicator";
import { CarouselViewer } from "./CarouselViewer";
import "./goals.css"; // Import dedicated CSS for this component

export const Goals = (props) => {
  const [current, setCurrent] = useState(0);

  return (
    <div id="goals">
      {props.data && (
        <div className="goals-container">
          <div className="carousel-indicator-container">
            <CarouselIndicator
              value={current}
              setValue={(value) => setCurrent(value)}
              content={["01", "02", "03"]}
            />
          </div>
          <CarouselViewer
            content={props.data.images.map((image, index) => (
              <img
                className="carousel-image"
                style={{
                  width:"100%"
                }}
                key={index}
                src={image}
                alt={`Goal image ${index + 1}`}
              />
            ))}
            width="100%"
            height="36vw"
            itemWidth="48%"
            itemDeltaWidth={50}
            current={current+1}
          />
        </div>
      )}
    </div>
  );
};
