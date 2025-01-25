import React from "react";
import './About.css';

function About() {
  return (
    <div id="about">
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        I completed my degree as a B.Sc.(Hons) in Computer Science at the
        Eastern University of Sri Lanka. I have a strong technical background in
        web development, with expertise in programming languages such as Java,
        HTML, CSS, JavaScript, PHP, C++, MySQL, and VB.Net, and frameworks
        including Bootstrap, Laravel, and React JS.
      </p>
      <p>My academic projects and research include topics such as:</p>
      <ul>
        <li>
          Sri Lankan agriculture plant disease detection using CNN with Docker
        </li>
        <li>
          Bovine identification through nose prints using CNN
        </li>
        <li>
          Web and software development projects, such as a Rent-a-Car System, 
          Book Management System, Courier Service Management System, and 
          Sentiment Analysis using NLP.
        </li>
      </ul>
      <p>
        Overall, I am a motivated and skilled computer science graduate with a 
        keen interest in web development and AI applications, ready to contribute 
        to a professional environment.
      </p>
    </div>
    </div>
  );
}

export default About;
