import React from "react";
import { SectionHeader } from "../sectionHeader";
import { CarouselIndicator } from "../CarouselIndicator";
import { CarouselViewer } from "../CarouselViewer";
import { useState } from "react";

const CaouselItem1 = (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "stretch",
      alignItems: "stretch",
      padding: "50px",
    }}
  >
    <div
      style={{
        flexGrow: "1",
        display: "flex",
        justifyContent: "stretch",
        alignItems: "stretch",
        gap: "50px",
      }}
    >
      <div
        style={{
          width: "50%",
          borderTop: "1px solid white",
        }}
      >
        <img
          style={{
            width: "226px",
            height: "75px",
            margin: "10px 0px",
          }}
          src="img/Mask group.png"
        ></img>
        <p>Cell Therapies</p>
        <p
          style={{
            width: "80%",
          }}
        >
          CytoSeek’s mission is to use Artificial Membrane-Binding Protein
          technology to deliver the potential of the next generation of cell
          therapies, with a focus on treating solid tumours.
        </p>
        <button
          style={{
            marginTop: "80px",
          }}
        >
          View all members
        </button>
      </div>
      <img
        style={{
          width: "50%",
        }}
        src="img/therapist.png"
      ></img>
    </div>
  </div>
);

export const Ecosystem = (props) => {
  const [current, setCurrent] = useState(0);
  return (
    <div id="ecosystem">
      {props.data && (
        <div className="container">
          <SectionHeader
            title={props.data.header.title}
            content={props.data.header.content}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              style={{
                width: "150px",
                height: "150px",
              }}
              src={props.data.customer.avatar}
              alt="David May"
            ></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>David May</p>
                <p>Professor of Computer Science</p>
              </div>
              <img
                style={{
                  width: "196px",
                  height: "50px",
                }}
                src={props.data.customer.universityLogo}
              ></img>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          backgroundColor: "#231E1F",
          borderRadius: "10px",
          margin: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "60px",
            bottom: "40px",
            zIndex: "1",
          }}
        >
          <CarouselIndicator
            value={current}
            setValue={(value) => {
              setCurrent(value);
            }}
            content={["01", "02", "03", "04"]}
            whiteTheme
          ></CarouselIndicator>
        </div>
        <CarouselViewer
          content={[CaouselItem1, CaouselItem1, CaouselItem1, CaouselItem1]}
          width="100%"
          height="50vw"
          itemWidth="100%"
          itemDeltaWidth={100}
          current={current}
        ></CarouselViewer>
      </div>
    </div>
  );
};
