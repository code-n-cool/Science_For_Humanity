import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger from GSAP
import "./style.css";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export const Event = (props) => {
  const eventRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // ScrollTrigger setup for animating the Event section when it enters the viewport
    ScrollTrigger.create({
      trigger: eventRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        gsap.to(eventRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.3 }
        );
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.6 }
        );
      },
      onLeave: () => {
        // gsap.to(eventRef.current, {
        //   opacity: 0,
        //   y: 50,
        //   duration: 1,
        //   ease: "power3.out",
        // });
      },
    });

    // Cleanup ScrollTrigger when the component is unmounted
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="event-container" ref={eventRef}>
      <img
        ref={imageRef}
        className="event-image"
        src={props.image}
        alt="Event"
      />
      <div className="event-details">
        <button ref={buttonRef} className="event-button">
          Community Event
        </button>
        <img
          className="event-external-link"
          src="img/external_link_buttom.png"
          alt="External Link"
        />
        {props.content && (
          <h3 ref={contentRef} className="event-content">
            {props.content}
          </h3>
        )}
      </div>
    </div>
  );
};
