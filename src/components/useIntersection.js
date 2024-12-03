import React, { useEffect, useState } from "react";
import Home from "../pages/home";

const useIntersection = (ref, options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const mainTitleRef = React.useRef();
  const aboutRef = React.useRef();
  const projectRef = React.useRef();
  const contactRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useIntersection;
