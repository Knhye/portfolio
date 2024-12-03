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
      const scrollTop = window.scrollY; // 스크롤된 거리
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight; // 문서 전체 높이
      const scrollPercentage = (scrollTop / docHeight) * 100; // 스크롤 비율 계산
      setProgress(scrollPercentage); // progress 상태 업데이트
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 등록
    return () => window.removeEventListener("scroll", handleScroll); // 컴포넌트 언마운트 시 이벤트 제거
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
