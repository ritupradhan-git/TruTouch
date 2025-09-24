// components/ProjectDescription.js
import React from 'react';
import '../styles/ProjectDesc.css';

function ProjectDescription() {
  return (
    <section id="project-description" className="section">
      <h2>Our Project: The Rootach AMG Prosthetic Hand</h2>
      <p>
        The Rootach prosthetic hand utilizes advanced Electromyography (AMG) signals to translate muscle movements into precise control of the prosthetic digits. Our innovative design focuses on modularity, durability, and most importantly, cost-effectiveness, without compromising on functionality or aesthetic appeal.
      </p>
      <ul>
        <li>**Affordable:** Developed with cost-efficient materials and manufacturing processes.</li>
        <li>**Intuitive Control:** AMG-powered for natural and responsive movements.</li>
        <li>**Durable Design:** Built to withstand daily use and provide long-lasting performance.</li>
        <li>**Empowering Users:** Restoring dexterity and confidence.</li>
      </ul>
      {/* Add diagrams or simplified technical explanations */}
    </section>
  );
}

export default ProjectDescription;