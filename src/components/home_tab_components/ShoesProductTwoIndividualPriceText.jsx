// src/components/home_tab_components/ShoesProductTwoIndividualPriceText.jsx
import React from 'react';
import './ShoesProductTwoIndividualPriceText.css';


const defaultProps = {
  text: '$1100.00',
};

const ShoesProductTwoIndividualPriceText = ({ text = defaultProps.text }) => {
  return (
    <div className="shoes-product-two-individual-price-text">
      {text}
    </div>
  );
};

export default ShoesProductTwoIndividualPriceText;