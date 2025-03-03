// src/components/me_tab_components/OffersProductImageThree.jsx
import React from 'react';
import './OffersProductImageThree.css';

const defaultProps = {
  image: 'https://example.com/coffee-machine.jpg',
};

const OffersProductImageThree = ({ image }) => {
  return (
    <img
      src={image ?? defaultProps.image}
      alt="Coffee Machine"
      className="offers-product-image-three"
    />
  );
};

export default OffersProductImageThree;