import React from "react";
import "./style.css"; // Import the external CSS file

export const Blog = (props) => {
  return (
    <div className="blog-container">
      <img src={props.image} className="blog-image" alt="Blog Thumbnail" />
      <div className="blog-content">
        <div className="blog-header">
          <h5 className="blog-date">{props.date}</h5>
          <button type="button" className="blog-type">
            {props.type}
          </button>
        </div>
        <h3 className="blog-title">{props.title}</h3>
        <img
          src="img/external_link_buttom.png"
          className="blog-link-icon"
          alt="External Link"
        />
      </div>
    </div>
  );
};
