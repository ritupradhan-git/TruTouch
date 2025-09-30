import React from 'react';
import '../styles/ProjectDesc.css';

function ProjectDescription() {
  return (
    <section id="project-description" className="project-description-section">
      <h2 className="section-title"><span>TruTouch.</span> Making advanced prosthetics accessible to all.</h2>

      <div className="card first-card">
        <div className="card-image-wrapper">
          {/* Placeholder for a relevant image */}
          <img src="https://via.placeholder.com/400x300?text=Why+Image" alt="Person looking thoughtful about challenges" />
        </div>
        <div className="card-text">
          <h3 className="card-heading">Why?</h3>
          <p>
            Millions worldwide live without limbs due to accidents, conditions, or birth defects — and the lack of affordable prosthetics limits their mobility and independence. We believe everyone deserves the chance to live life to the fullest.
          </p>
        </div>
      </div>

      <div className="card second-card">
        <div className="card-text">
          <h3 className="card-heading">Your Solution</h3>
          <p>
            We're developing TruTouch, an EMG-controlled prosthetic hand that combines affordability with advanced functionality, giving users a practical, intuitive solution for everyday life, restoring dignity and capability.
          </p>
        </div>
        <div className="card-image-wrapper">
          {/* Placeholder for a relevant image */}
          <img src="https://via.placeholder.com/400x300?text=Solution+Image" alt="Prosthetic hand being used" />
        </div>
      </div>

      {/* <div className="scroll-container">
        <div className="scroll-content">
          <span>Affordable & Accessible</span>
          <span>Smart EMG Control</span>
          <span>Natural Movements & Grip</span>
          <span>Designed for Real Lives</span>
          <span>For Communities Worldwide</span>
          
          <span>Affordable & Accessible</span>
          <span>Smart EMG Control</span>
          <span>Natural Movements & Grip</span>
          <span>Designed for Real Lives</span>
          <span>For Communities Worldwide</span>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-step"><h3>Current Stage</h3>
          <div className="progress-circle">

            <p>TruTouch is currently in rigorous development. Our dedicated team at Rootach is testing and refining prototypes to ensure unparalleled durability, accuracy, and intuitive usability for real-world needs.</p>
          </div>
        </div>

        <div className="progress-line"></div>

        <div className="progress-step"><h3>Future Vision</h3>
          <div className="progress-circle">

            <p>Our unwavering goal is to redefine prosthetic technology, ensuring that every individual — regardless of financial background or location — has access to profound independence, restored dignity, and boundless opportunity.</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default ProjectDescription;