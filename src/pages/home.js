import "../styles/home.css";
import About from "../components/about";
import Project from "../components/project";
import Contact from "../components/contact";
import useIntersection from "../components/useIntersection";
import React, { useRef, useState, useEffect } from "react";
import Introduce from "../components/introduce";
import ProgressBar from "../components/progressbar";

const Home = () => {
  const mainTitleRef = useRef(null);
  const isVisible = useIntersection(mainTitleRef);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <nav>
        <span className="nav-title">
          <a href="/#">KIM NA HYE</a>
        </span>
        <ul>
          <li className="nav-list">
            <a href="#about">ABOUT</a>
          </li>
          <li className="nav-list">
            <a href="#project">Projects</a>
          </li>
          <li className="nav-list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <ProgressBar progress={progress} />

      <div className="home-page">
        <div
          ref={mainTitleRef}
          className={`main-title ${isVisible ? "visible" : ""}`}
          id="home"
        >
          <h1>PORTFOLIO</h1>
          <div className="main-title-explain">
            경북 소프트웨어 고등학교에 재학중인 <br />
            김나혜의 포트폴리오 사이트입니다.
          </div>
        </div>
      </div>

      <Introduce />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
