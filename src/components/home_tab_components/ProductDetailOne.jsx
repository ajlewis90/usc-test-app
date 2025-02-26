// src/components/home_tab_components/ProductDetailOne.jsx (unchanged, kept for future use)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetailOne.css';

const ProductDetailOne = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home'); // Default to Home, matching the route

  const handleBackClick = () => {
    navigate('/');
  };

  const handleMainTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(tabName === 'Home' ? '/' : `/${tabName.toLowerCase()}`);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <button className="back-button" onClick={handleBackClick}>
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
      <div className="tab-bar">
        {['Home', 'Companion', 'Me', 'Carts'].map((tabName) => (
          <button
            key={tabName}
            className={`tab ${activeTab === tabName ? 'active' : ''}`}
            onClick={() => handleMainTabClick(tabName)}
          >
            <span className="tab-icon">
              {tabName === 'Home' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M218.83,103.77l-80-75.48a16,16,0,0,0-21.53,0L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77Z" />
                </svg>
              )}
              {tabName === 'Companion' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm52-12a44,44,0,1,0-44,44A44,44,0,0,0,224,108Zm-192,0a44,44,0,1,0,44,44A44,44,0,0,0,32,108Z" />
                </svg>
              )}
              {tabName === 'Me' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,72a44,44,0,1,1,44-44A44,44,0,0,1,128,72Zm0,72a44,44,0,1,1,44-44A44,44,0,0,1,128,144Z" />
                </svg>
              )}
              {tabName === 'Carts' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M184,184a24,24,0,1,1-24-24A24,24,0,0,1,184,184Zm-80-24a24,24,0,1,0,24,24A24,24,0,0,0,104,160Zm128-88V216a16,16,0,1,1-16,16H32a16,16,0,1,1-16-16V72A16,16,0,0,1,32,56H48L72,24A8,8,0,0,1,80,24H176a8,8,0,0,1,8,8Z" />
                </svg>
              )}
            </span>
            <span className="tab-label">{tabName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailOne;