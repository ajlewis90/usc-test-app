// src/components/home_tab_components/ProductDetailFour.jsx
import React from 'react';
import './ProductDetailFour.css';

const ProductDetailFour = ({ onClose }) => {
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
            src="https://assets.api.uizard.io/api/cdn/stream/510cfb6b-37eb-4d34-b364-a3f46741363e.png"
            alt="Fisher-Price Laugh & Learn Smart Stages Chair"
            className="product-image"
          />
          <h1 className="product-title">Fisher-Price Laugh & Learn Smart Stages Chair</h1>
          <p className="product-description">
            The Fisher-Price Laugh & Learn Smart Stages Chair is a fun and educational toy for toddlers, featuring interactive songs, phrases, and activities that grow with your child.
          </p>
          <div className="size-options">
            <div className="size-option">Yellow - $40</div>
            <div className="size-option">Blue - $40</div>
            <div className="size-option">Pink - $40</div>
            <div className="size-option">Green - $40</div>
            <div className="size-option">Red - $40</div>
          </div>
          <div className="price-section">
            <div className="price-label">Individual price</div>
            <div className="price-value">$1000</div>
            <button className="buy-individual">Buy individual</button>
          </div>
          <div className="price-section">
            <div className="price-label">Group price</div>
            <div className="price-value">$950</div>
          </div>
          <div className="group-info">
            <div className="group-timer">2 days left</div>
            <div className="group-condition">5 want this, 5 more needed to complete the group</div>
            <button className="join-group">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailFour;