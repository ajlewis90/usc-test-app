// src/components/BeautyCategoryText.jsx
import React from 'react';
import './BeautyCategoryText.css';

const defaultProps = {
  text: 'Beauty',
};

const BeautyCategoryText = (props) => {
  return (
    <div className="beauty-category-text">
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default BeautyCategoryText;