import React, { useEffect, useState } from "react";
import { Tween } from "react-gsap"; // Import GSAP ScrollTrigger and Tween
import { ScrollTrigger } from "gsap/all";
import { SectionHeader } from "./sectionHeader";
import "./about.css"; // Import the dedicated CSS file

export const About = (props) => {
  const [playState, setPlayState] = useState("play"); // Default play state

  useEffect(() => {
    // Add ScrollTrigger to trigger animation based on scroll position
    ScrollTrigger.create({
      trigger: "#about", // Target the About section
      start: "top 80%", // Start when the top of the section hits 80% of the viewport
      end: "bottom top", // End when the bottom of the section reaches the top of the viewport
      scrub: true, // Smoothly animate during scroll
      onEnter: () => setPlayState("play"), // Play animations when entering the viewport
      onLeave: () => setPlayState("pause"), // Pause animations when leaving the viewport
    });
  }, []);

  return (
    <div id="about">
      <div className="  container">
        {props.data && (
          <SectionHeader
            title={props.data.header.title}
            content={props.data.header.content}
          />
        )}
      </div>

      <div className="about-main-content">
        {/* Left section with scroll-triggered animations */}
        <div className="about-left-section">
          <Tween
            from={{ opacity: 0, scale: 0.8 }}
            to={{ opacity: 1, scale: 1 }}
            duration={1.5}
            scrollTrigger={{
              trigger: ".about-left-section", // Target the left section for animation
              start: "top 80%",
              end: "bottom 50%",
              scrub: 1, // Smooth animation as we scroll
              toggleActions: "play none none none", // Play the animation when entering the section
            }}
          >
            <img
              src="img/intro-bg.png"
              className="img-responsive"
              alt="About Background"
            />
          </Tween>

          <div className="about-text">
            <Tween
              from={{ opacity: 0, x: -50 }}
              to={{ opacity: 1, x: 0 }}
              duration={1}
              delay={0.5}
              scrollTrigger={{
                trigger: ".about-left-section", // Trigger based on the left section
                start: "top 80%",
                end: "bottom 50%",
                scrub: 1,
              }}
            >
              <div>
                <h4>Who we are?</h4>
                <p>Insights into ScienceCreates</p>
              </div>
            </Tween>

            <Tween
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              duration={1}
              delay={1}
              scrollTrigger={{
                trigger: ".about-left-section", // Trigger based on the left section
                start: "top 80%",
                end: "bottom 50%",
                scrub: 1,
              }}
            >
              <button className="watch-button" type="button">
                Watch
              </button>
            </Tween>
          </div>
        </div>

        {/* Right section with scroll-triggered animations */}
        <div className="about-right-section">
          <Tween
            from={{ opacity: 0, x: 50 }}
            to={{ opacity: 1, x: 0 }}
            duration={1}
            delay={1.2}
            scrollTrigger={{
              trigger: ".about-right-section", // Target the right section for animation
              start: "top 80%",
              end: "bottom 50%",
              scrub: 1,
              toggleActions: "play none none none", // Play the animation when entering the section
            }}
          >
            <p>
              Science Creates is a Bristol-based deep tech ecosystem, supported
              and backed by successful entrepreneurs that help scientists and
              engineers accelerate their ideas and build disruptive businesses
              from scientific discoveries.
            </p>
          </Tween>
          <Tween
            from={{ opacity: 0, x: 50 }}
            to={{ opacity: 1, x: 0 }}
            duration={1}
            delay={1.5}
            scrollTrigger={{
              trigger: ".about-right-section", // Target the right section for animation
              start: "top 80%",
              end: "bottom 50%",
              scrub: 1,
              toggleActions: "play none none none", // Play the animation when entering the section
            }}
          >
            <p>
              In partnership with the University of Bristol, Science Creates
              aims to establish Bristol as a global centre for deep tech by
              combining specialist incubator facilities, a network of strategic
              partners, and a dedicated venture capital fund.
            </p>
          </Tween>
        </div>
      </div>
    </div>
  );
};
