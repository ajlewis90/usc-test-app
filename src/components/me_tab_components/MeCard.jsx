// src/components/me_tab_components/MeCard.jsx
import React, { useEffect } from 'react';
import ForMeTextTitle from './ForMeTextTitle';
import OffersForMeIcon from './OffersForMeIcon';
import MyReviewsIcon from './MyReviewsIcon';
import GetRewardsIcon from './GetRewardsIcon';
import GiftsSurprisesIcon from './GiftsSurprisesIcon';
import OffersForMeText from './OffersForMeText';
import MyReviewsText from './MyReviewsText';
import GetRewardsText from './GetRewardsText';
import GiftsSurprisesText from './GiftsSurprisesText';
import OffersProductImageOne from './OffersProductImageOne';
import OffersProductTextOne from './OffersProductTextOne';
import OffersProductOriginalPriceTextOne from './OffersProductOriginalPriceTextOne';
import OffersProductDiscountedPriceTextOne from './OffersProductDiscountedPriceTextOne';
import AddToCartButtonOne from './AddToCartButtonOne';
import OffersProductImageTwo from './OffersProductImageTwo';
import OffersProductTextTwo from './OffersProductTextTwo';
import OffersProductOriginalPriceTextTwo from './OffersProductOriginalPriceTextTwo';
import OffersProductDiscountedPriceTextTwo from './OffersProductDiscountedPriceTextTwo';
import AddToCartButtonTwo from './AddToCartButtonTwo';
import OffersProductImageThree from './OffersProductImageThree';
import OffersProductTextThree from './OffersProductTextThree';
import OffersProductOriginalPriceTextThree from './OffersProductOriginalPriceTextThree';
import OffersProductDiscountedPriceTextThree from './OffersProductDiscountedPriceTextThree';
import AddToCartButtonThree from './AddToCartButtonThree';

const MeCard = ({ onMeTabChange }) => {
  const [activeMeTab, setActiveMeTab] = React.useState('Offers for me');

  // Reset to "Offers for me" whenever the Me tab is activated
  useEffect(() => {
    setActiveMeTab('Offers for me');
  }, [onMeTabChange]);

  const handleMeTabClick = (tab) => {
    setActiveMeTab(tab);
  };

  const handleAddToCartClick = (productName) => (e) => {
    e.stopPropagation();
    console.log(`Added ${productName} to cart`);
  };

  return (
    <div className="me-card">
      <div className="me-card-content">
        <div className="for-me-title-wrapper"> {/* Added wrapper for centering */}
          <ForMeTextTitle />
        </div>
        <div className="me-card-icons">
          <div
            className={`icon-text-pair ${activeMeTab === 'Offers for me' ? 'active' : ''}`}
            onClick={() => handleMeTabClick('Offers for me')}
          >
            <OffersForMeIcon />
            <OffersForMeText />
          </div>
          <div
            className={`icon-text-pair ${activeMeTab === 'My Reviews' ? 'active' : ''}`}
            onClick={() => handleMeTabClick('My Reviews')}
          >
            <MyReviewsIcon />
            <MyReviewsText />
          </div>
          <div
            className={`icon-text-pair ${activeMeTab === 'Get Rewards' ? 'active' : ''}`}
            onClick={() => handleMeTabClick('Get Rewards')}
          >
            <GetRewardsIcon />
            <GetRewardsText />
          </div>
          <div
            className={`icon-text-pair ${activeMeTab === 'Gifts & Surprises' ? 'active' : ''}`}
            onClick={() => handleMeTabClick('Gifts & Surprises')}
          >
            <GiftsSurprisesIcon />
            <GiftsSurprisesText />
          </div>
        </div>
        {activeMeTab === 'Offers for me' && (
          <div className="me-tab-content">
            <div className="product-group">
              <OffersProductImageOne />
              <OffersProductTextOne />
              <OffersProductOriginalPriceTextOne />
              <div className="price-and-button-row">
                <OffersProductDiscountedPriceTextOne />
                <div className="spacer" />
                <div onClick={handleAddToCartClick('Retro Sneakers')}>
                  <AddToCartButtonOne />
                </div>
              </div>
            </div>
            <div className="product-group">
              <OffersProductImageTwo />
              <OffersProductTextTwo />
              <OffersProductOriginalPriceTextTwo />
              <div className="price-and-button-row">
                <OffersProductDiscountedPriceTextTwo />
                <div className="spacer" />
                <div onClick={handleAddToCartClick('Cute Stuffed Bear')}>
                  <AddToCartButtonTwo />
                </div>
              </div>
            </div>
            <div className="product-group">
              <OffersProductImageThree />
              <OffersProductTextThree />
              <OffersProductOriginalPriceTextThree />
              <div className="price-and-button-row">
                <OffersProductDiscountedPriceTextThree />
                <div className="spacer" />
                <div onClick={handleAddToCartClick('Coffee Machine')}>
                  <AddToCartButtonThree />
                </div>
              </div>
            </div>
          </div>
        )}
        {activeMeTab === 'My Reviews' && (
          <div className="me-tab-content">
            <p>My Reviews content goes here.</p>
          </div>
        )}
        {activeMeTab === 'Get Rewards' && (
          <div className="me-tab-content">
            <p>Get Rewards content goes here.</p>
          </div>
        )}
        {activeMeTab === 'Gifts & Surprises' && (
          <div className="me-tab-content">
            <p>Gifts & Surprises content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeCard;