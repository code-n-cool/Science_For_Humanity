import { useState } from "react";
import { CarouselIndicator } from "./CarouselIndicator";
import { CarouselViewer } from "./CarouselViewer";
export const Goals = (props) => {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <CarouselIndicator
        value={current}
        setValue={(value) => {
          setCurrent(value);
        }}
        content={["01", "02", "03", "04"]}
      ></CarouselIndicator>
      <CarouselViewer
        content={[
          <div
            style={{ backgroundColor: "red", width: "100%", height: "100%" }}
          ></div>,
          <div
            style={{ backgroundColor: "yellow", width: "100%", height: "100%" }}
          ></div>,
          <div
            style={{ backgroundColor: "blue", width: "100%", height: "100%" }}
          ></div>,
          <div
            style={{ backgroundColor: "green", width: "100%", height: "100%" }}
          ></div>,
        ]}
        width="100%"
        height="30vw"
        itemWidth="40%"
        itemDeltaWidth={50}
        current={current}
      ></CarouselViewer>
    </div>
  );
};
