// components/PhotoGallery.js
import React from 'react';
import '../styles/Photo.css';

function PhotoGallery() {
  const images = [
    { src: '/images/hand-closeup1.jpg', alt: 'Rootach hand close-up' },
    { src: '/images/hand-wearing.jpg', alt: 'Person wearing Rootach hand' },
    { src: '/images/team-working.jpg', alt: 'Team working on prototype' },
    { src: '/images/hand-components.jpg', alt: 'Internal components of the hand' },
  ];

  return (
    <section id="gallery" className="section">
      <h2>Our Gallery</h2>
      <p>Explore the journey of Rootach – from concept to creation.</p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PhotoGallery;