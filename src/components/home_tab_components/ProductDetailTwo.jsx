// src/components/home_tab_components/ProductDetailTwo.jsx
import React from 'react';
import './ProductDetailTwo.css';

const ProductDetailTwo = ({ onClose }) => {
  return (
    <div className="product-detail-overlay">
      <div className="product-detail-container">
        <div className="product-detail-header">
          <button className="back-button" onClick={onClose}>
            ←
          </button>
        </div>
        <div className="product-detail-content">
          <img
            src="https://assets.api.uizard.io/api/cdn/stream/6e6aee90-d251-49d2-b465-498a99659f3a.png"
            alt="Dior Dway Slide Sandal in Embroidered Cotton"
            className="product-image"
          />
          <h1 className="product-title">Dior Dway Slide Sandal in Embroidered Cotton</h1>
          <p className="product-description">
            Elegant slide sandal featuring embroidered cotton, offering a luxurious and comfortable design perfect for any occasion. Crafted with premium materials for style and durability.
          </p>
          <div className="color-options">
            <div className="color-option">Black</div>
            <div className="color-option">White</div>
            <div className="color-option">Red</div>
            <div className="color-option">Blue</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Group price:</div>
              <div className="price-value">$950.00</div>
              <button className="join-group">Join Group</button>
            </div>
            <div className="group-timer">2 days left</div>
            <div className="group-condition">5 people want this, 5 more needed</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value">$1100.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTwo;