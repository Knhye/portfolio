import "../styles/about.css";
import useIntersection from "./useIntersection";

import React from "react";
import { useRef } from "react";

const About = React.forwardRef((props, ref) => {
  const aboutRef = useRef(null);
  const isVisible = useIntersection(aboutRef);

  return (
    <div
      id="about"
      ref={aboutRef}
      className={`about ${isVisible ? "visible" : ""}`}
    >
      <div className="about-title">
        <div className="about-maintitle">ABOUT</div>
        <div className="about-sidetitle">Full-Stack Developer</div>
      </div>
      <div className="about-contents">
        <div className="about-contents-date">2024/03/02</div>
        <div className="about-contents-text">
          - 경북 소프트웨어 고등학교 입학
        </div>
      </div>
    </div>
  );
});

export default About;
