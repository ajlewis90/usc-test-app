// src/components/home_tab_components/BeautyProductOneIndividualPriceText.jsx
import React from 'react';
import './BeautyProductOneIndividualPriceText.css';

const defaultProps = {
  text: '$ 335.00',
};

const BeautyProductOneIndividualPriceText = ({ text = defaultProps.text }) => {
  return (
    <div className="beauty-product-one-individual-price-text">
      {text}
    </div>
  );
};

export default BeautyProductOneIndividualPriceText;