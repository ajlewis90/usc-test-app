// src/components/home_tab_components/ProductDetailFive.jsx
import React from 'react';
import './ProductDetailFive.css';

const ProductDetailFive = ({ onClose }) => {
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
            src="https://assets.api.uizard.io/api/cdn/stream/d59d7261-5ecd-4484-9551-44dc1d93fe45.png"
            alt="Levi's 501 Original Fit Jeans"
            className="product-image"
          />
          <h1 className="product-title">Levi's 501 Original Fit Jeans</h1>
          <p className="product-description">
            The Levi's 501 Original Fit Jeans are a timeless classic, offering a comfortable fit and iconic style for everyday wear.
          </p>
          <div className="color-options">
            <div className="color-option">S</div>
            <div className="color-option">M</div>
            <div className="color-option">L</div>
          </div>
          <div className="price-section">
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Group price:</div>
              <div className="price-value">$70.00</div>
            </div>
            <div className="group-timer">2 days left</div>
            <div className="group-condition">2 people want this, 3 more needed to complete the group</div>
            <button className="join-group">Join Group</button>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value">$70.00</div>
              <button className="buy-individual">Buy individual</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailFive;