// src/components/me_tab_components/MeCard.jsx
import React, { useEffect } from 'react';
import OffersForMeIcon from './OffersForMeIcon';
import MyReviewsIcon from './MyReviewsIcon';
import GetRewardsIcon from './GetRewardsIcon';
import GiftsSurprisesIcon from './GiftsSurprisesIcon';
import OffersForMeText from './OffersForMeText';
import MyReviewsText from './MyReviewsText';
import GetRewardsText from './GetRewardsText';
import GiftsSurprisesText from './GiftsSurprisesText';
import './MeCard.css';

const MeCard = ({ onMeTabChange }) => {
  const [activeMeTab, setActiveMeTab] = React.useState('Offers for me');

  // Reset to "Offers for me" whenever the Me tab is activated
  useEffect(() => {
    setActiveMeTab('Offers for me');
  }, [onMeTabChange]);

  const handleMeTabClick = (tab) => {
    setActiveMeTab(tab);
  };

  return (
    <div className="me-card">
      <div className="me-card-content">
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
            <p>Offers for me content goes here.</p>
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