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
            src="https://assets.api.uizard.io/api/cdn/stream/0fd8e547-6f14-4dfc-8c01-42f39be7636c.png"
            alt="Nike Air Force 1 '07 Sneaker"
            className="product-image"
          />
          <h1 className="product-title">Nike Air Force 1 '07 Sneaker</h1>
          <p className="product-description">
            The Nike Air Force 1 '07 Sneaker in White/White offers timeless style and comfort with its iconic design and cushioned sole, perfect for everyday wear.
          </p>
          <div className="color-options">
            <div className="color-option">US 6</div>
            <div className="color-option">US 7</div>
            <div className="color-option">US 8</div>
            <div className="color-option">US 9</div>
            <div className="color-option">US 10</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Group price:</div>
              <div className="price-value">$300.00</div>
              <button className="join-group">Join Group</button>
            </div>
            <div className="group-timer">2 days left</div>
            <div className="group-condition">4 people want this, 1 more needed to complete the group</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value">$335.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSeven;