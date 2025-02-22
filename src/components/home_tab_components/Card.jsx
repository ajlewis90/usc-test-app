// src/components/home_tab_components/Card.jsx
import React from 'react';
import CardAllIcon from './CardAllIcon';
import SkinCareIcon from './SkinCareIcon';
import CardAllText from './CardAllText';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-icons">
          <CardAllIcon />
          <SkinCareIcon />
        </div>
        <CardAllText />
      </div>
      {props.children}
    </div>
  );
};

export default Card;