// src/components/home_tab_components/ViewBusinessThreeCartButton.jsx
import React from 'react';
import './ViewBusinessThreeCartButton.css';

const defaultProps = {
  label: 'View Cart', // Same default label as ViewBusinessTwoCartButton
};

const ViewBusinessThreeCartButton = ({ label = defaultProps.label }) => {
  return (
    <button className="view-business-three-cart-button">
      {label}
    </button>
  );
};

export default ViewBusinessThreeCartButton;