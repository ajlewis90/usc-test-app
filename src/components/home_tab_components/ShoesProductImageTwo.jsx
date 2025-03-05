// src/components/home_tab_components/ShoesProductImageTwo.jsx
import React from 'react';
import './ShoesProductImageTwo.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/fbe819f5-01ef-4c42-b37c-0ebcb7c3fda5.png',
};

const ShoesProductImageTwo = ({ image }) => {
  return (
    <div
      className="shoes-product-image-two"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default ShoesProductImageTwo;