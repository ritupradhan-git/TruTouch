// components/ContactUs.js
import React from 'react';
import '../styles/ContactUs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
function ContactUs() {
  const handleCopy = (email) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email);
    alert(`Copied: ${email}`);
  }
};

  return (
    <section id="contact-us" className="section">
      <div className="left">
        <h2>Let's Connect!</h2>
        <p>Your ideas, feedback, and support matter. Reach out to us to join the conversation, or simply say hello. </p>
      </div>
      <div className="right">
        <div className="card">
          <h2>Ronit Rajib Pattnaik</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ronit-rajib-pattnaik-222674236/" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <div className="mail">
              <FontAwesomeIcon icon={faEnvelope} />
              <button
                className="email-box"
                onClick={() => handleCopy("ronit@gmail.com")}
                aria-label="Copy email"
              >
                ronit@gmail.com
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>Rituparna Pradhan</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rituparna-pradhan-6b67b821a/" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <div className="mail">
              <FontAwesomeIcon icon={faEnvelope} />
              <button
                className="email-box"
                onClick={() => handleCopy("ronit@gmail.com")}
                aria-label="Copy email"
              >
                ronit@gmail.com
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ContactUs;