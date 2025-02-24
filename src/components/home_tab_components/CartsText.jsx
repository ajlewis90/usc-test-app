// src/components/home_tab_components/CartsText.jsx
import React from 'react';
import './CartsText.css';

const defaultProps = {
  text: 'Carts',
};

const CartsText = ({ text = defaultProps.text }) => {
  return (
    <div className="carts-text">
      {text}
    </div>
  );
};

export default CartsText;