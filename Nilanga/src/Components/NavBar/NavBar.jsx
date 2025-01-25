import React from 'react';
import MenuList from './MenuList';
import './NavBar.css';

function NavBar() {
  return (
    <div id="navcontent">
      {/* Button Sensor Section */}
      <div className="wrapper">
        <div style={{ "--a": 0 }} className="btn-sensor sensor-n"></div>
        <div style={{ "--a": 45 }} className="btn-sensor sensor-ne"></div>
        <div style={{ "--a": 90 }} className="btn-sensor sensor-e"></div>
        <div style={{ "--a": 135 }} className="btn-sensor sensor-se"></div>
        <div style={{ "--a": 180 }} className="btn-sensor sensor-s"></div>
        <div style={{ "--a": 225 }} className="btn-sensor sensor-sw"></div>
        <div style={{ "--a": 270 }} className="btn-sensor sensor-w"></div>
        <div style={{ "--a": 315 }} className="btn-sensor sensor-nw"></div>
        <button className="btn-button">
          <div className="btn-lid"></div>
          <div className="btn-pupil"></div>
        </button>
        <button className="btn-button">
          <div className="btn-lid"></div>
          <div className="btn-pupil"></div>
        </button>
      </div>

      {/* Menu Links */}
      <div>
        <MenuList linkname="About" url="#about"  />
        <MenuList linkname="Experience" url="#experience" />
        <MenuList linkname="Project" url="#project" />
        <MenuList linkname="Contact" url="#contact" />
      </div>
    </div>
  );
}

export default NavBar;
