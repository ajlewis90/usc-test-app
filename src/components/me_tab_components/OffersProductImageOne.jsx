// src/components/me_tab_components/OffersProductImageOne.jsx
import React from 'react';
import './OffersProductImageOne.css';

const defaultProps = {
  image: 'https://example.com/retro-sneakers.jpg',
};

const OffersProductImageOne = ({ image }) => {
  return (
    <img
      src={image ?? defaultProps.image}
      alt="Retro Sneakers"
      className="offers-product-image-one"
    />
  );
};

export default OffersProductImageOne;