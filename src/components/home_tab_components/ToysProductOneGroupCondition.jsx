// src/components/home_tab_components/ToysProductOneGroupCondition.jsx
import React from 'react';
import './ToysProductOneGroupCondition.css';

const defaultProps = {
  text: '2 people want this, 3 more needed... Group Price: $300.00',
};

const ToysProductOneGroupCondition = ({ text = defaultProps.text }) => {
  return (
    <div className="toys-product-one-group-condition">
      {text}
    </div>
  );
};

export default ToysProductOneGroupCondition;