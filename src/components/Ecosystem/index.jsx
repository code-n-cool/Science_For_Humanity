import React from "react";
import { SectionHeader } from "../sectionHeader";

export const Ecosystem = (props) => {
  return (
    <div id="">
      {props.data && (
        <div className="container">
          (
          <SectionHeader
            title={props.data.header.title}
            content={props.data.header.content}
          />
          )
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
    </div>
  );
};
