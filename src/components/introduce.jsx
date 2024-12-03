import "../styles/introduce.css";
import useIntersection from "./useIntersection";

import React from "react";
import { useRef } from "react";

const Introduce = React.forwardRef((props, ref) => {
  const introduceRef = useRef(null);
  const isVisible = useIntersection(introduceRef);

  return (
    <div
      id="introduce"
      ref={introduceRef}
      className={`introduce ${isVisible ? "visible" : ""}`}
    >
      <div className="introduce-maintitle">
        안녕하세요
        <br />
        개발자 김나혜입니다
      </div>
      <br></br>
      <div className="introduce-maincontent">
        Hello! I am currently attending high school and am interested in various
        fields such as algorithms, UI/UX design, server development, backend
        construction, and DB management. Although I still lack experience, I am
        a diligent developer who is filling it up one by one.
      </div>
    </div>
  );
});

export default Introduce;
