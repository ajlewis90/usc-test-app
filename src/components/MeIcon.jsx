// src/components/MeIcon.jsx
import React from 'react';
import './MeIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/c5842368-c10a-460f-af47-28407867df17.png',
};

const MeIcon = (props) => {
  return (
    <div className="me-icon tab-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default MeIcon;