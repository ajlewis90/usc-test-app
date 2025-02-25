// src/components/home_tab_components/ViewBusinessOneCartButton.jsx
import React from 'react';
import './ViewBusinessOneCartButton.css';

const defaultProps = {
  label: 'View Cart',
};

const ViewBusinessOneCartButton = ({ label = defaultProps.label }) => {
  return (
    <button className="view-business-one-cart-button">
      {label}
    </button>
  );
};

export default ViewBusinessOneCartButton;