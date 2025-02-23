// src/components/home_tab_components/HouseCleaningText.jsx
import React from 'react';
import './HouseCleaningText.css';

const defaultProps = {
  text: 'House Cleaning',
  onClick: () => {},
};

const HouseCleaningText = ({ text, onClick }) => {
  return (
    <div className="house-cleaning-text" onClick={onClick}>
      {text ?? defaultProps.text}
    </div>
  );
};

export default HouseCleaningText;