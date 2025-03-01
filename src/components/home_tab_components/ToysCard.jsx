// src/components/home_tab_components/ToysCard.jsx
import React from 'react';
import ToysAllIcon from './ToysAllIcon';
import RemoteControlIcon from './RemoteControlIcon';
import BlocksIcon from './BlocksIcon';
import ActionIcon from './ActionIcon';
import DollsIcon from './DollsIcon';
import ToysAllText from './ToysAllText';
import RemoteControlText from './RemoteControlText';
import BlocksText from './BlocksText';
import ActionText from './ActionText';
import DollsText from './DollsText';
import './ToysCard.css';

const ToysCard = ({ activeFilter, onFilterClick }) => {
  return (
    <div className="toys-card">
      <div className="toys-card-content">
        <div className="toys-card-icons">
          <div
            className={`icon-text-pair ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => onFilterClick('All')}
          >
            <ToysAllIcon />
            <ToysAllText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Remote Control' ? 'active' : ''}`}
            onClick={() => onFilterClick('Remote Control')}
          >
            <RemoteControlIcon />
            <RemoteControlText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Blocks' ? 'active' : ''}`}
            onClick={() => onFilterClick('Blocks')}
          >
            <BlocksIcon />
            <BlocksText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Action' ? 'active' : ''}`}
            onClick={() => onFilterClick('Action')}
          >
            <ActionIcon />
            <ActionText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Dolls' ? 'active' : ''}`}
            onClick={() => onFilterClick('Dolls')}
          >
            <DollsIcon />
            <DollsText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;