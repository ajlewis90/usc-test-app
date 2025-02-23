// src/components/home_tab_components/ToysIcon.jsx
import React from 'react';
import './ToysIcon.css';

const defaultProps = {
  image: 'https://via.placeholder.com/40?text=Toys', // Placeholder image
  onClick: () => {},
};

const ToysIcon = ({ image, onClick }) => {
  return (
    <div
      className="toys-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default ToysIcon;