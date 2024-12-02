import React from "react";
import { SectionHeader } from "./sectionHeader";
import "./about.css"; // Import the dedicated CSS file

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
        <div className="about-main-content">
          <div className="about-left-section">
            <div>
              <img src="img/intro-bg.png" className="img-responsive" alt="" />
            </div>
            <div className="about-text">
              <div>
                <h4>Who we are?</h4>
                <p>Insights into ScienceCreates</p>
              </div>
              <button className="watch-button" type="button">
                Watch
              </button>
            </div>
          </div>
          <div className="about-right-section">
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
              partners, and a dedicated venture capital fund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
