// src/components/home_tab_components/ProductDetailThree.jsx
import React from 'react';
import './ProductDetailThree.css';

const ProductDetailThree = ({ onClose }) => {
  return (
    <div className="product-detail-three-overlay">
      <div className="product-detail-three">
        <button className="close-button" onClick={onClose}>⨯</button>
        <h2>LEGO Star Wars Millennium Falcon</h2>
        <p>Price: $335.00</p>
        <p>Age Range: Ages 9-14</p>
        <p>Group Price: $300.00</p>
        <p>Details: Iconic LEGO Star Wars set with detailed design.</p>
      </div>
    </div>
  );
};

export default ProductDetailThree;