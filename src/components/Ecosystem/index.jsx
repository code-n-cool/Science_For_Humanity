import React, { useState } from "react";
import { SectionHeader } from "../sectionHeader";
import { CarouselIndicator } from "../CarouselIndicator";
import { CarouselViewer } from "../CarouselViewer";
import "./style.css";

const CarouselItem1 = (
  <div className="carousel-item-container">
    <div className="carousel-item-content">
      <div className="carousel-text-section">
        <img className="carousel-logo" src="img/Mask group.png" alt="Logo" />
        <h3 className="carousel-title">Cell Therapies</h3>
        <p className="carousel-description">
          CytoSeek’s mission is to use Artificial Membrane-Binding Protein
          technology to deliver the potential of the next generation of cell
          therapies, with a focus on treating solid tumours.
        </p>
        <button className="carousel-button">View all members</button>
      </div>
      <img className="carousel-image" src="img/therapist.png" alt="Therapist" />
    </div>
  </div>
);

export const Ecosystem = (props) => {
  const [current, setCurrent] = useState(0);
  return (
    <div id="ecosystem" className="ecosystem-container">
      {props.data && (
        <div className="ecosystem-content">
          <SectionHeader
            title={props.data.header.title}
            content={props.data.header.content}
          />
          <div className="customer-info">
            <img
              className="customer-avatar"
              src={props.data.customer.avatar}
              alt="David May"
            />
            <div className="customer-details">
              <div>
                <p className="customer-name">David May</p>
                <p className="customer-role">Professor of Computer Science</p>
              </div>
              <img
                className="university-logo"
                src={props.data.customer.universityLogo}
                alt="University Logo"
              />
            </div>
          </div>
        </div>
      )}

      <div className="ecosystem-carousel-container">
        <div className="carousel-indicator-wrapper">
          <CarouselIndicator
            value={current}
            setValue={setCurrent}
            content={["01", "02", "03", "04"]}
            whiteTheme
          />
        </div>
        <CarouselViewer
          content={[CarouselItem1, CarouselItem1, CarouselItem1, CarouselItem1]}
          width="100%"
          height="50vw"
          itemWidth="100%"
          itemDeltaWidth={100}
          current={current}
        />
      </div>
    </div>
  );
};
