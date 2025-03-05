// src/components/CompanionIcon.jsx
import React from 'react';
import './CompanionIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/1e9333c3-79ba-407c-a99c-d5f96afba562.png',
};

const CompanionIcon = (props) => {
  return (
    <div className="companion-icon tab-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default CompanionIcon;