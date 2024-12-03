import "../styles/contact.css";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import useIntersection from "./useIntersection";
import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";

const Contact = React.forwardRef((props, ref) => {
  const contactRef = useRef(null);
  const isVisible = useIntersection(contactRef);

  return (
    <div className="contact" id="contact">
      <div
        ref={contactRef}
        className={`contact-main ${isVisible ? "visible" : ""}`}
      >
        <div className="contact-title">Contact</div>
        <div className="contact-contents">
          <div className="contact-content">
            <FaInstagram />
            <a
              className="contact-content-instagram"
              href="https://www.instagram.com/3n1hye_/"
              target="_blank"
            >
              3n1hye_
            </a>
          </div>
          <div className="contact-content">
            <IoMail />
            <div className="contact-content-email">knahye311@gmail.com</div>
          </div>
          <div className="contact-content">
            <FaGithub />
            <a
              href="https://github.com/Knhye"
              className="contact-content-github"
              target="_blank"
            >
              github.com/Knhye
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
