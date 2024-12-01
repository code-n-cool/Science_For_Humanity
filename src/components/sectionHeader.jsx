import React from "react";

export const SectionHeader = (props) => {
  return (
    <h1>
      <span className="section_header">{props.title}</span>
      {props.content}
    </h1>
  );
};
