// src/components/home_tab_components/ProductDetailSix.jsx
import React from 'react';
import './ProductDetailSix.css';

const ProductDetailSix = ({ onClose }) => {
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
            src="https://assets.api.uizard.io/api/cdn/stream/2f3b0fff-5715-4d07-8c8a-a6ad268192a1.png"
            alt="Ralph Lauren Men's Polo Shirt"
            className="product-image"
          />
          <h1 className="product-title">Ralph Lauren Men's Polo Shirt</h1>
          <p className="product-description">
            The Ralph Lauren Men's Polo Shirt combines classic style with modern comfort, perfect for casual and semi-formal occasions.
          </p>
          <div className="size-options">
            <div className="size-option">Black</div>
            <div className="size-option">White</div>
            <div className="size-option">Blue</div>
          </div>
          <div className="price-section">
            <div className="price-label">Group price</div>
            <div className="price-value">$50.00</div>
          </div>
          <div className="group-info">
            <div className="group-timer">2 days left</div>
            <div className="group-condition">5 people want this, 5 more needed to complete the group</div>
            <button className="join-group">Join Group</button>
          </div>
          <div className="price-section">
            <div className="price-label">Individual price</div>
            <div className="price-value">$50.00</div>
            <button className="buy-individual">Buy individual</button>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSix;