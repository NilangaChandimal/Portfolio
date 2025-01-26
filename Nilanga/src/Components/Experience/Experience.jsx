import React from "react";
import {
  FaReact,
  FaLaravel,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaBootstrap,
  FaPython,
  FaDatabase,
  FaJava,
  FaGithub,
  FaNetworkWired,
} from "react-icons/fa";
import { SiTailwindcss, SiTensorflow, SiDatabricks } from "react-icons/si";
import "./Experience.css";
import { DiVisualstudio } from "react-icons/di";

function Experience() {
  return (
    <div id="experience">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="experience-content">
          {/* Left Section for Icons */}
          <div className="icon-list">
            <div className="icon-item">
              <FaHtml5 className="icon html-icon" />
              <p>HTML5</p>
            </div>
            <div className="icon-item">
              <FaCss3 className="icon css-icon" />
              <p>CSS</p>
            </div>
            <div className="icon-item">
              <FaJs className="icon js-icon" />
              <p>JS</p>
            </div>
            <div className="icon-item">
              <FaPhp className="icon php-icon" />
              <p>Php</p>
            </div>
            <div className="icon-item">
              <FaBootstrap className="icon boostrap-icon" />
              <p>Bootstrap</p>
            </div>
            <div className="icon-item">
              <FaPython className="icon python-icon" />
              <p>Python</p>
            </div>
            <div className="icon-item">
              <FaDatabase className="icon mysql-icon" />
              <p>MySQL</p>
            </div>
            <div className="icon-item">
              <SiTailwindcss className="icon tailwind-icon" />
              <p>Tailwind CSS</p>
            </div>
            <div className="icon-item">
              <SiTensorflow className="icon tensorflow-icon" />
              <p>TensorFlow</p>
            </div>
            <div className="icon-item">
              <SiDatabricks className="icon nlp-icon" />
              <p>NLP</p>
            </div>
            <div className="icon-item">
              <FaReact className="icon react-icon" />
              <p>React</p>
            </div>
            <div className="icon-item">
              <FaLaravel className="icon laravel-icon" />
              <p>Laravel</p>
            </div>
            <div className="icon-item">
              <DiVisualstudio className="icon vbnet-icon" />
              <p>VB.NET</p>
            </div>
            <div className="icon-item">
              <FaNetworkWired className="icon cisco-icon" />
              <p>Cisco Packet Tracer</p>
            </div>

            <div className="icon-item">
              <FaGithub className="icon oop-icon" /> <p>Git</p>
            </div>

            <div className="icon-item">
              <FaJava className="icon java-icon" />
              <p>Java</p>
            </div>

            <div className="icon-item">
              <img
                src="./public/postman.ico"
                alt=""
                className="icon postman-icon"
              />
              <p>Postman</p>
            </div>
          </div>

          {/* Right Section for Cart */}
          <div className="cart">
            <h4>
              {" "}
              Intern System Developer,
              <br />
              eSupport Technologies (Pvt) Ltd
            </h4>
            <h5>Dec 2024 - Present</h5>
            <p>
              I am developing LMS System Using Laravel. so it used templete{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
