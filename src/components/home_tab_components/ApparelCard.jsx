// src/components/home_tab_components/ApparelCard.jsx
import React from 'react';
import ApparelAllIcon from './ApparelAllIcon';
import ShirtsIcon from './ShirtsIcon';
import DressesIcon from './DressesIcon';
import SuitsIcon from './SuitsIcon';
import JeansIcon from './JeansIcon';
import SkirtsIcon from './SkirtsIcon';
import KidsIcon from './KidsIcon';
import SocksIcon from './SocksIcon';
import ApparelAllText from './ApparelAllText';
import ShirtsText from './ShirtsText';
import DressesText from './DressesText';
import SuitsText from './SuitsText';
import JeansText from './JeansText';
import SkirtsText from './SkirtsText';
import KidsText from './KidsText';
import SocksText from './SocksText';
import './ApparelCard.css';

const ApparelCard = ({ activeFilter, onFilterClick }) => {
  return (
    <div className="apparel-card">
      <div className="apparel-card-content">
        <div className="apparel-card-icons">
          <div
            className={`icon-text-pair ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => onFilterClick('All')}
          >
            <ApparelAllIcon />
            <ApparelAllText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Shirts' ? 'active' : ''}`}
            onClick={() => onFilterClick('Shirts')}
          >
            <ShirtsIcon />
            <ShirtsText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Dresses' ? 'active' : ''}`}
            onClick={() => onFilterClick('Dresses')}
          >
            <DressesIcon />
            <DressesText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Suits' ? 'active' : ''}`}
            onClick={() => onFilterClick('Suits')}
          >
            <SuitsIcon />
            <SuitsText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Jeans' ? 'active' : ''}`}
            onClick={() => onFilterClick('Jeans')}
          >
            <JeansIcon />
            <JeansText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Skirts' ? 'active' : ''}`}
            onClick={() => onFilterClick('Skirts')}
          >
            <SkirtsIcon />
            <SkirtsText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Kids' ? 'active' : ''}`}
            onClick={() => onFilterClick('Kids')}
          >
            <KidsIcon />
            <KidsText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Socks' ? 'active' : ''}`}
            onClick={() => onFilterClick('Socks')}
          >
            <SocksIcon />
            <SocksText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApparelCard;