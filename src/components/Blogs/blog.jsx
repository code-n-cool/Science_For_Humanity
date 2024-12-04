import React, { useEffect, useRef } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Blog = (props) => {
  const blogRef = useRef(null);

  useEffect(() => {
    const blogElement = blogRef.current;

    // Animate blogs when they enter the viewport
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blogElement,
        start: "top 90%",
        end: "top 60%",
        toggleActions: "play none none reverse", // Play when entering, reverse when leaving
        markers: false, // Debugging markers
      },
    });

    // Sequential animations
    tl.fromTo(
      blogElement.querySelector(".blog-image"),
      {
        opacity: 0,
        x: -100, // Slide in from the left
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    )
      .fromTo(
        blogElement.querySelector(".blog-content"),
        {
          opacity: 0,
          x: 100, // Slide in from the right
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8" // Overlap with the first animation
      )
      .fromTo(
        blogElement.querySelector(".blog-title"),
        {
          opacity: 0,
          y: 20, // Slide in from below
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.5" // Overlap with the previous animation
      );

    // Add hover animation
    blogElement.addEventListener("mouseenter", () => {
      gsap.to(blogElement, {
        scale: 1.05, // Slight zoom-in effect
        boxShadow: "0px 10px 20px rgba(0,0,0,0.3)", // Shadow on hover
        duration: 0.3,
      });
    });

    blogElement.addEventListener("mouseleave", () => {
      gsap.to(blogElement, {
        scale: 1, // Reset scale
        boxShadow: "0px 5px 10px rgba(0,0,0,0.2)", // Reset shadow
        duration: 0.3,
      });
    });
  }, []);

  return (
    <div className="blog-container" ref={blogRef}>
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
