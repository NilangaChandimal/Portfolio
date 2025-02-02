import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div id="profile-container">
      {/* Left-hand side: Text content */}
      <div id="div">
        <h3>I'm Nilanga Chandimal</h3>
        <h1 id="h1">
          I'M A
          <span>
            <span> CODER</span>
            <span> DEVELOPER</span>
            <span> PROGRAMMER</span>
          </span>
        </h1>
        <p>
          Enthusiastic Computer Science graduate skilled in HTML, CSS, JavaScript, PHP,
          Laravel, React JS, and Python. Passionate about creating responsive
          websites and innovative solutions. Seeking an entry-level role or
          internship to apply my skills and grow in a dynamic environment.
        </p>
      </div>

      {/* Right-hand side: Profile image */}
      <div>
        <img className="img" src="public/nilanga.jpg" alt="Nilanga Chandimal" />
      </div>
    </div>
  );
}

export default Profile;
