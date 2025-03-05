// src/components/home_tab_components/ShoesProductImageOne.jsx
import React from 'react';
import './ShoesProductImageOne.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/fbe819f5-01ef-4c42-b37c-0ebcb7c3fda5.png',
};

const ShoesProductImageOne = ({ image }) => {
  return (
    <div
      className="shoes-product-image-one"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default ShoesProductImageOne;