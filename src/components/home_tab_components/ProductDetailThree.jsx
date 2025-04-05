// src/components/home_tab_components/ProductDetailThree.jsx
import React from 'react';
import './ProductDetailThree.css';

const ProductDetailThree = ({ onClose }) => {
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
            src="https://assets.api.uizard.io/api/cdn/stream/545b2668-558f-420c-9fc6-c2b4ccdf0ed2.png"
            alt="Lego Star Wars Millennium Falcon"
            className="product-image"
          />
          <h1 className="product-title">Lego Star Wars Millennium Falcon</h1>
          <p className="product-description">
            The Lego Star Wars Millennium Falcon is a must-have for any Star Wars fan. This iconic starship features stunning detail and is perfect for both play and display.
          </p>
          <div className="color-options">
            <div className="color-option">200 pieces - $60</div>
            <div className="color-option">400 pieces - $100</div>
            <div className="color-option">600 pieces - $150</div>
            <div className="color-option">800 pieces - $200</div>
            <div className="color-option">1000 pieces - $250</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Group price:</div>
              <div className="price-value">$60.00</div>
              <button className="join-group">Join Group</button>
            </div>
            <div className="group-timer">2 days left</div>
            <div className="group-condition">4 people want this, 1 more needed to complete the group</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value">$45.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailThree;