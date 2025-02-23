// src/components/home_tab_components/PersonalCareIcon.jsx
import React from 'react';
import './PersonalCareIcon.css';

const defaultProps = {
  image: 'https://via.placeholder.com/40?text=Personal+Care', // Placeholder image
  onClick: () => {},
};

const PersonalCareIcon = ({ image, onClick }) => {
  return (
    <div
      className="personal-care-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default PersonalCareIcon;