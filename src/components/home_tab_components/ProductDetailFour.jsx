// src/components/home_tab_components/ProductDetailFour.jsx
import React from 'react';
import './ProductDetailFour.css';

const ProductDetailFour = ({ onClose }) => {
  return (
    <div className="product-detail-four-overlay">
      <div className="product-detail-four">
        <button className="close-button" onClick={onClose}>⨯</button>
        <h2>Fisher-Price Laugh & Learn Smart Stages Chair</h2>
        <p>Price: $1000.00</p>
        <p>Age Range: For toddlers</p>
        <p>Group Price: $950.00</p>
        <p>Details: Interactive chair for toddlers with learning features.</p>
      </div>
    </div>
  );
};

export default ProductDetailFour;