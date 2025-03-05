// src/components/home_tab_components/ProductDetailSeven.jsx
import React from 'react';
import './ProductDetailSeven.css';

const ProductDetailSeven = ({ onClose }) => {
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
            src="https://assets.api.uizard.io/api/cdn/stream/8e6e5b3b-5f9b-4e5d-9b7e-7b3e9d4f5c6d.png"
            alt="Nike Air Force 1 '07 Sneaker"
            className="product-image"
          />
          <h1 className="product-title">Nike Air Force 1 '07 Sneaker</h1>
          <p className="product-description">
            The Nike Air Force 1 '07 Sneaker in White/White offers timeless style and comfort with its iconic design and cushioned sole, perfect for everyday wear.
          </p>
          <div className="size-options">
            <div className="size-option">US 6</div>
            <div className="size-option">US 7</div>
            <div className="size-option">US 8</div>
            <div className="size-option">US 9</div>
            <div className="size-option">US 10</div>
          </div>
          <div className="price-section">
            <div className="price-label">Individual price</div>
            <div className="price-value">$100</div>
            <button className="buy-individual">Buy Now</button>
          </div>
          <div className="price-section">
            <div className="price-label">Group price</div>
            <div className="price-value">$80</div>
          </div>
          <div className="group-info">
            <div className="group-timer">48 hours 00 minutes 00 seconds</div>
            <div className="group-condition">4 people want this, 1 more person needed</div>
            <button className="join-group">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSeven;