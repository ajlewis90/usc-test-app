// src/components/home_tab_components/PersonalCareText.jsx
import React from 'react';
import './PersonalCareText.css';

const defaultProps = {
  text: 'Personal Care',
  onClick: () => {},
};

const PersonalCareText = ({ text, onClick }) => {
  return (
    <div className="personal-care-text" onClick={onClick}>
      {text ?? defaultProps.text}
    </div>
  );
};

export default PersonalCareText;