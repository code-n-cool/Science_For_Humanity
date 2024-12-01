import { useState } from "react";
import { CarouselIndicator } from "./CarouselIndicator";
import { CarouselViewer } from "./CarouselViewer";
export const Goals = (props) => {
  const [current, setCurrent] = useState(0);

  return (
    <div id="goals">
      {props.data && (
        <div>
          <div style={{ float: "right", marginRight: "20%" }}>
            <CarouselIndicator
              value={current}
              setValue={(value) => {
                setCurrent(value);
              }}
              content={["01", "02", "03"]}
            ></CarouselIndicator>
          </div>
          <CarouselViewer
            content={[
              <img
                style={{
                  backgroundColor: "red",
                  width: "100%",
                  height: "100%",
                }}
                src={props.data.images[0]}
              ></img>,
              <img
                style={{
                  backgroundColor: "yellow",
                  width: "100%",
                  height: "100%",
                }}
                src={props.data.images[1]}
              ></img>,
              <img
                style={{
                  backgroundColor: "blue",
                  width: "100%",
                  height: "100%",
                }}
                src={props.data.images[2]}
              ></img>,
              // <img
              //   style={{
              //     backgroundColor: "green",
              //     width: "100%",
              //     height: "100%",
              //   }}
              //   src={props.data.images[3]}
              // ></img>,
            ]}
            width="100%"
            height="30vw"
            itemWidth="40%"
            itemDeltaWidth={50}
            current={current}
          ></CarouselViewer>
        </div>
      )}
    </div>
  );
};
