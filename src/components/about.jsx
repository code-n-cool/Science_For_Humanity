import React from "react";
import { SectionHeader } from "./sectionHeader";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div>
          {props.data && (
            <SectionHeader
              title={props.data.header.title}
              content={props.data.header.content}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            gap: "100px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "60%",
              gap: "40px",
              alignItems: "stretch",
            }}
          >
            <div>
              <img src="img/intro-bg.png" className="img-responsive" alt="" />{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4>Who we are?</h4>
                <p>Insights into ScienceCreates</p>
              </div>
              <button
                type="button"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "black",
                  width: "235px",
                  height: "45px"
                }}
              >
                Watch
              </button>
            </div>
          </div>
          <div
            style={{
              width: "50%",
            }}
          >
            <p>
              Science Creates is a Bristol-based deep tech ecosystem, supported
              and backed by successful entrepreneurs that help scientists and
              engineers accelerate their ideas and build disruptive businesses
              from scientific discoveries.
            </p>
            <p>
              In partnership with the University of Bristol, Science Creates
              aims to establish Bristol as a global centre for deep tech by
              combining specialist incubator facilities, a network of strategic
              partners and a dedicated venture capital fund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
