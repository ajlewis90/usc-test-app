// src/components/home_tab_components/ViewBusinessTwoCartButton.jsx
import React from 'react';
import './ViewBusinessTwoCartButton.css';

const defaultProps = {
  label: 'View Cart', // You can change this default label if needed for CartTwo
};

const ViewBusinessTwoCartButton = ({ label = defaultProps.label }) => {
  return (
    <button className="view-business-two-cart-button">
      {label}
    </button>
  );
};

export default ViewBusinessTwoCartButton;