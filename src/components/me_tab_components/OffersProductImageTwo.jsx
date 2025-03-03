// src/components/me_tab_components/OffersProductImageTwo.jsx
import React from 'react';
import './OffersProductImageTwo.css';

const defaultProps = {
  image: 'https://example.com/cute-stuffed-bear.jpg',
};

const OffersProductImageTwo = ({ image }) => {
  return (
    <img
      src={image ?? defaultProps.image}
      alt="Cute Stuffed Bear"
      className="offers-product-image-two"
    />
  );
};

export default OffersProductImageTwo;