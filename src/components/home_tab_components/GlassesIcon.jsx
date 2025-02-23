// src/components/home_tab_components/GlassesIcon.jsx
import React from 'react';
import './GlassesIcon.css';

const defaultProps = {
  image: 'https://via.placeholder.com/40?text=Glasses', // Placeholder image
  onClick: () => {},
};

const GlassesIcon = ({ image, onClick }) => {
  return (
    <div
      className="glasses-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default GlassesIcon;