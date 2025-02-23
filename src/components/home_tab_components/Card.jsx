// src/components/home_tab_components/Card.jsx
import React from 'react';
import CardAllIcon from './CardAllIcon';
import SkinCareIcon from './SkinCareIcon';
import CardAllText from './CardAllText';
import SkinCareText from './SkinCareText';
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
        </div>
      </div>
    </div>
  );
};

export default Card;