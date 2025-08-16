// src/components/home_tab_components/PriceDropdownButton.jsx
import React from 'react';
import './PriceDropdownButton.css';

const PriceDropdownButton = ({ onPriceDropdownClick, productName, originalPrice }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onPriceDropdownClick) {
      onPriceDropdownClick(productName, originalPrice);
    }
  };

  return (
    <button className="price-dropdown-button" onClick={handleClick}>
      Price Drop
    </button>
  );
};

export default PriceDropdownButton;