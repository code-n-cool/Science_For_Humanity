import React, { useEffect, useRef } from "react";  
import { Tween, Timeline } from "react-gsap";  
import "./style.css";  

export const EventSpaces = (props) => {  
  // Create a ref to reference the container for GSAP animations  
  const containerRef = useRef(null);  

  useEffect(() => {  
    // Optional: Any additional side effects or configurations can go here  
  }, []);  

  return (  
    <div className="event-spaces-container" ref={containerRef}>  
      <Timeline>  
        <Tween from={{ scale: 0.5, rotationY: -180 }} to={{ scale: 1, rotationY: 0 }} duration={1}>  
          <img className="event-spaces-image" src="img/eventspace background.png" alt="Event Space" />  
        </Tween>  
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} delay={0.5}>  
          <div className="event-spaces-content">  
            <h3 className="event-spaces-title">A unique and versatile space</h3>  
            <p className="event-spaces-description">  
              Available for hire for members and non-members working in the  
              innovation sector. Science Creates has a variety of event spaces that  
              can cater for a diverse range of events.  
            </p>  
            <button className="event-spaces-button" type="button">  
              Event Spaces  
            </button>  
          </div>  
        </Tween>  
      </Timeline>  
    </div>  
  );  
};