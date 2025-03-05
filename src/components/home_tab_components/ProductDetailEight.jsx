// src/components/home_tab_components/ProductDetailEight.jsx
import React from 'react';
import './ProductDetailEight.css';

const ProductDetailEight = ({ onClose }) => (
  <div className="product-detail-eight">
    <h2>Adidas Ultraboost Running Shoe</h2>
    <p>Price: $1,100.00</p>
    <p>4 colors</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default ProductDetailEight;