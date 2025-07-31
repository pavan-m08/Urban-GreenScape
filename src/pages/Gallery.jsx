import React, { useState } from 'react';
import '../styles/Gallery.css';

const images = [
  {
    src: 'src/assets/before-rooftop-garden.jpg',
    alt: 'Before transformation - unused rooftop',
    caption: 'Before: Unused Rooftop',
    type: 'before',
  },
  {
    src: 'src/assets/after-rooftop-garden.jpg',
    alt: 'After transformation - lush rooftop garden',
    caption: 'After: Lush Community Garden',
    type: 'after',
  },
  {
    src: 'src/assets/community-events.jpg',
    alt: 'Community gardening event',
    caption: 'Community Gardening Event',
    type: 'event',
  },
  {
    src: 'src/assets/workshop.jpg',
    alt: 'Gardening workshop',
    caption: 'Gardening Workshop',
    type: 'event',
  },
];

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Before', value: 'before' },
  { label: 'After', value: 'after' },
  { label: 'Events', value: 'event' },
];

function Gallery() {
  const [filter, setFilter] = useState('all');
  const [modalImg, setModalImg] = useState(null);

  const filteredImages = filter === 'all' ? images : images.filter(img => img.type === filter);
  const isBeforeAfter = filter === 'before' || filter === 'after';

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-filters">
        {filterOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`gallery-filter-btn ${filter === opt.value ? 'active' : 'inactive'}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className={`gallery-grid ${isBeforeAfter ? 'before-after' : ''}`}>
        {filteredImages.map((img, idx) => (
          <div key={idx} className="gallery-item" onClick={() => setModalImg(img)}>
            <img 
              src={img.src} 
              alt={img.alt} 
              className={`gallery-image ${isBeforeAfter ? 'before-after' : ''}`} 
            />
            <div className={`gallery-caption ${isBeforeAfter ? 'before-after' : ''}`}>
              {img.caption}
            </div>
          </div>
        ))}
      </div>
      {modalImg && (
        <div className="gallery-modal-overlay" onClick={() => setModalImg(null)}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setModalImg(null)}>&times;</button>
            <img 
              src={modalImg.src} 
              alt={modalImg.alt} 
              className={`gallery-modal-image ${isBeforeAfter ? 'before-after' : ''}`} 
            />
            <div className={`gallery-modal-caption ${isBeforeAfter ? 'before-after' : ''}`}>
              {modalImg.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery; 