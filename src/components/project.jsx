import "../styles/project.css";
import useIntersection from "./useIntersection";
import React from "react";
import { useRef } from "react";

const Project = React.forwardRef((props, ref) => {
  const projectRef = useRef(null);
  const isVisible = useIntersection(projectRef);

  return (
    <div className="project" id="project">
      <div
        ref={projectRef}
        className={`project-main ${isVisible ? "visible" : ""}`}
      >
        <div className="project-contents">
          <div className="project-contents-content">
            <img
              className="project-contents-cover"
              src={`${process.env.PUBLIC_URL}/images/vcalendar.png`}
            ></img>
            <a
              className="project-contents-title"
              href="https://github.com/Knhye/vcalendar"
              target="_blank"
            >
              Virtual Calendar & Todo List
              <br />
              <p>
                가상 캘린더 및 할일 목록을 보여주는 V-CALENDAR. <br />
                가볍고 편리하게 할 일 목록을 관리할 수 있는 프로그램입니다.
              </p>
            </a>
          </div>
          <div className="project-contents-content">
            <img
              className="project-contents-cover"
              src={`${process.env.PUBLIC_URL}/images/playlist.png`}
            ></img>
            <a
              className="project-contents-title"
              href="https://github.com/Knhye/playlist_youra"
              target="_blank"
            >
              Youra_PlayList
              <br />
              <p>
                가수 Youra의 곡을 담은 플레이리스트. <br />
                유라의 앨범 및 곡을 담은 플레이리스트 프로그램입니다.
                <br /> 음악 재생이 가능하며 짧은 유라의 정보도 들어있습니다.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;
