// components/PhotoGallery.js
import React, { useState } from 'react';
import '../styles/Photo.css';
import photo1 from '../../assets/photo.jpg';
import photo2 from '../../assets/photo1.jpg';
import photo3 from '../../assets/photo2.jpg';
import photo4 from '../../assets/photo4.jpg';

function PhotoGallery() {
  const images = [
    { src:photo1, alt: 'Rootach hand close-up' },
    { src:photo2, alt: 'Rootach hand close-up' },
    { src:photo3, alt: 'Rootach hand close-up' },
    { src:photo4, alt: 'Rootach hand close-up' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getGalleryItemClass = (index) => {
    if (index === currentIndex) {
      return 'gallery-item active';
    } else if (index === (currentIndex === 0 ? images.length - 1 : currentIndex - 1)) {
      return 'gallery-item prev';
    } else if (index === (currentIndex === images.length - 1 ? 0 : currentIndex + 1)) {
      return 'gallery-item next';
    }
    return 'gallery-item'; // hidden items
  };

  return (
    <div id="gallery" className="gallery-section">
      <h2 className="gallery-title">Our Project Gallery</h2>
      <p className="gallery-description">Showcasing our achievements and beautiful work.</p>

      <div className="gallery-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={getGalleryItemClass(index)}
          />
        ))}

        <button onClick={goToPrev} className="navigation-arrow arrow-left">
          &lt;
        </button>
        <button onClick={goToNext} className="navigation-arrow arrow-right">
          &gt;
        </button>
      </div>

      {/* Navigation dots */}
      <div className="gallery-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
