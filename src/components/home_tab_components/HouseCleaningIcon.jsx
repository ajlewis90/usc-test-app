// src/components/home_tab_components/HouseCleaningIcon.jsx
import React from 'react';
import './HouseCleaningIcon.css';

const defaultProps = {
  image: 'https://via.placeholder.com/40?text=House+Cleaning', // Placeholder image
  onClick: () => {},
};

const HouseCleaningIcon = ({ image, onClick }) => {
  return (
    <div
      className="house-cleaning-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default HouseCleaningIcon;