import React from 'react'
import './Contact.css'
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-info">
          <ul>
            <li>
              <a href="mailto:nilangachandimal1111@gmail.com" className="contact-link">
                <FaEnvelope size={24} /> nilangachandimal1111@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nilanga-chandimal-19852a269" className="contact-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://wa.me/+94770714587" className="contact-link" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://github.com/NilangaChandimal" className="contact-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} /> GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="address">
          <p>Your Address Here</p>
          <p>Somikelum, Muthukeliyawa, Buttala</p>
          <p>0770714587 / 0701483141</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
