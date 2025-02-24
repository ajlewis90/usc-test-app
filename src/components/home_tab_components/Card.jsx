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
          </>
        )}
      </div>
    </div>
  );
};

export default Card;