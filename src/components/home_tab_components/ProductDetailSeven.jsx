// src/components/home_tab_components/ProductDetailSeven.jsx
import React from 'react';
import './ProductDetailSeven.css';

const ProductDetailSeven = ({ onClose }) => (
  <div className="product-detail-seven">
    <h2>Nike Air Force 1'07 Sneaker</h2>
    <p>Price: $335.00</p>
    <p>2 sizes</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default ProductDetailSeven;