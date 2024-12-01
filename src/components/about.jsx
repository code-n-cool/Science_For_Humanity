import React from "react";
import { SectionHeader } from "./sectionHeader";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {props.data && (
            <SectionHeader
              title={props.data.header.title}
              content={props.data.header.content}
            />
          )}
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-6 col-md-6">
              <div className="about-text">
                <h2>Who we are?</h2>
                <p>Insights into ScienceCreates</p>
                <button>Watch</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p>
            Science Creates is a Bristol-based deep tech ecosystem, supported
            and backed by successful entrepreneurs that help scientists and
            engineers accelerate their ideas and build disruptive businesses
            from scientific discoveries.
          </p>
          <p>
            In partnership with the University of Bristol, Science Creates aims
            to establish Bristol as a global centre for deep tech by combining
            specialist incubator facilities, a network of strategic partners and
            a dedicated venture capital fund.
          </p>
        </div>
      </div>
    </div>
  );
};
