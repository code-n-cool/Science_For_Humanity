import React from "react";
import { Blog } from "./blog.jsx"; // Assuming Blog component is in the same folder
import { SectionHeader } from "../sectionHeader"; // Assuming SectionHeader component is in the parent folder
import "./style.css"; // Importing the CSS file

export const Blogs = (props) => {
  return (
    <div className="blogs-container">
      {props.data && (
        <SectionHeader
          title={props.data.header.title}
          content={props.data.header.content}
        />
      )}
      {props.data &&
        props.data.blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            <Blog {...blog} />
          </div>
        ))}
    </div>
  );
};
