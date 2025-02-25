// src/components/home_tab_components/Card.jsx
import React from 'react';
import CardAllIcon from './CardAllIcon';
import SkinCareIcon from './SkinCareIcon';
import EyesIcon from './EyesIcon';
import HairIcon from './HairIcon';
import NailsIcon from './NailsIcon';
import CardAllText from './CardAllText';
import SkinCareText from './SkinCareText';
import EyesText from './EyesText';
import HairText from './HairText';
import NailsText from './NailsText';
import BeautyProductImageOne from './BeautyProductImageOne';
import BeautyProductTextOne from './BeautyProductTextOne';
import BeautyProductOneIndividualPriceText from './BeautyProductOneIndividualPriceText';
import BeautyProductOneSizesText from './BeautyProductOneSizesText';
import JoinGroupButton from './JoinGroupButton';
import JoinGroupButtonTwo from './JoinGroupButtonTwo';
import GroupBuyIcon from './GroupBuyIcon';
import GroupBuyIconTwo from './GroupBuyIconTwo';
import BeautyProductOneGroupCondition from './BeautyProductOneGroupCondition';
import BeautyProductImageTwo from './BeautyProductImageTwo';
import BeautyProductTextTwo from './BeautyProductTextTwo';
import BeautyProductTwoIndivdualPriceText from './BeautyProductTwoIndivdualPriceText';
import BeautyProductTwoColorsText from './BeautyProductTwoColorsText';
import BeautyProductTwoGroupCondition from './BeautyProductTwoGroupCondition';
import './Card.css';

const Card = ({ activeFilter, onFilterClick }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-icons">
          <div
            className={`icon-text-pair ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => onFilterClick('All')}
          >
            <CardAllIcon />
            <CardAllText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Skin Care' ? 'active' : ''}`}
            onClick={() => onFilterClick('Skin Care')}
          >
            <SkinCareIcon />
            <SkinCareText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Eyes' ? 'active' : ''}`}
            onClick={() => onFilterClick('Eyes')}
          >
            <EyesIcon />
            <EyesText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Hair' ? 'active' : ''}`}
            onClick={() => onFilterClick('Hair')}
          >
            <HairIcon />
            <HairText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Nails' ? 'active' : ''}`}
            onClick={() => onFilterClick('Nails')}
          >
            <NailsIcon />
            <NailsText />
          </div>
        </div>
        {activeFilter === 'All' && (
          <>
            <BeautyProductImageOne />
            <BeautyProductTextOne />
            <BeautyProductOneIndividualPriceText />
            <div className="product-details-row">
              <BeautyProductOneSizesText />
              <div className="spacer" />
              <JoinGroupButton />
            </div>
            <div className="group-buy-row">
              <GroupBuyIcon />
              <BeautyProductOneGroupCondition />
            </div>
            <BeautyProductImageTwo />
            <BeautyProductTextTwo />
            <BeautyProductTwoIndivdualPriceText />
            <div className="product-details-row-two">
              <BeautyProductTwoColorsText />
              <div className="spacer" />
              <JoinGroupButtonTwo />
            </div>
            <div className="group-buy-row-two">
              <GroupBuyIconTwo />
              <BeautyProductTwoGroupCondition />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;