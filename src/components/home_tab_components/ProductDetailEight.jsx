// src/components/home_tab_components/ProductDetailEight.jsx
import React from 'react';
import './ProductDetailEight.css';

const ProductDetailEight = ({ onClose }) => {
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
            src="https://assets.api.uizard.io/api/cdn/stream/027eb941-5abd-4ad4-8438-8237473aaa99.png"
            alt="Adidas Ultraboost Running Shoe"
            className="product-image"
          />
          <h1 className="product-title">Adidas Ultraboost Running Shoe</h1>
          <p className="product-description">
            The Adidas Ultraboost Running Shoe offers superior comfort and energy return with its Boost midsole, perfect for runners seeking performance and style.
          </p>
          <div className="size-options">
            <div className="size-option">Black - $40</div>
            <div className="size-option">White - $40</div>
            <div className="size-option">Blue - $40</div>
            <div className="size-option">Red - $40</div>
          </div>
          <div className="price-section">
            <div className="price-label">Group price</div>
            <div className="price-value">$1050</div>
          </div>
          <div className="group-info">
            <div className="group-timer">3 days left</div>
            <div className="group-condition">4 want this, 6 more needed to complete the group</div>
            <button className="join-group">Join Group</button>
          </div>
          <div className="price-section">
            <div className="price-label">Individual price</div>
            <div className="price-value">$1100</div>
            <button className="buy-individual">Buy individual</button>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailEight;