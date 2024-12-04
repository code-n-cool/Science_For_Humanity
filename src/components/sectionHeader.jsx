import React, { useEffect } from "react";  
import { Tween, Timeline } from "react-gsap";  

export const SectionHeader = (props) => {  
  useEffect(() => {  
    // Optional: Any additional side-effects can be handled here  
  }, []);  

  return (  
    <h1>
      <Timeline>  
        <Tween from={{ opacity: 0, y: -20 }} to={{ opacity: 1, y: 0 }} duration={1}>  
          <span className="section_header">{props.title}</span>  
        </Tween>  
        <Tween from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} duration={1} delay={0.2}>  
          <span>{props.content}</span>  
        </Tween>  
      </Timeline>  
    </h1>  
  );  
};  