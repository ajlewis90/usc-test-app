// src/components/home_tab_components/Card.jsx
import React from 'react';
import CardAllIcon from './CardAllIcon';
import SkinCareIcon from './SkinCareIcon';
import CardAllText from './CardAllText';
import SkinCareText from './SkinCareText';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-icons">
          <div className="icon-text-pair">
            <CardAllIcon />
            <CardAllText />
          </div>
          <div className="icon-text-pair">
            <SkinCareIcon />
            <SkinCareText />
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Card;