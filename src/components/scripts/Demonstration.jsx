// components/Demonstration.js
import React from 'react';
import '../styles/Demonstration.css';

function Demonstration() {
  return (
    <section id="demonstration" className="section">
      <h2>See Rootach in Action</h2>
      <p>Watch our video demonstration to understand the intuitive control and functionality of the Rootach prosthetic hand.</p>
      <div className="video-container">
        {/* Replace with your actual YouTube embed code or a local video player */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          title="Rootach Demonstration Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Or display a GIF/image sequence */}
    </section>
  );
}

export default Demonstration;