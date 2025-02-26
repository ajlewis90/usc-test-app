// src/components/home_tab_components/ProductDetailOne.jsx
import React from 'react';
import './ProductDetailOne.css';

const ProductDetailOne = ({ onClose }) => {
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
            src="https://assets.api.uizard.io/api/cdn/stream/6c7b7d9c-4a3b-4e2a-8f9e-1b5c9d2e3f4a.png" // Same image as BeautyProductImageOne
            alt="La Mer The Moisturizing Soft Cream"
            className="product-image"
          />
          <h1 className="product-title">La Mer The Moisturizing Soft Cream</h1>
          <p className="product-description">
            Luxurious, lightweight cream delivers the same radiance and renewal that made the original Crème de la Mer a legend. It infuses skin with the healing energies of Miracle Broth, the heart of La Mer’s profound powers of transformation.
          </p>
          <div className="size-options">
            <div className="size-option">15ml - $100</div>
            <div className="size-option">30ml - $200</div>
            <div className="size-option">45ml - $300</div>
            <div className="size-option">60ml - $400</div>
            <div className="size-option">75ml - $500</div>
          </div>
          <div className="price-section">
            <div className="price-label">Individual price</div>
            <div className="price-value">$100</div>
            <button className="buy-individual">Buy individual</button>
          </div>
          <div className="price-section">
            <div className="price-label">Group price</div>
            <div className="price-value">$80</div>
          </div>
          <div className="group-info">
            <div className="group-timer">2 days left</div>
            <div className="group-condition">4 want this, 1 more person needed to complete the group</div>
            <button className="join-group">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailOne;