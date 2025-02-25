// src/components/home_tab_components/CartOneBusinessPrice.jsx
import React from 'react';
import './CartOneBusinessPrice.css';

const defaultProps = {
  text: '$ 20.99',
};

const CartOneBusinessPrice = ({ text = defaultProps.text }) => {
  return (
    <div className="cart-one-business-price">
      {text}
    </div>
  );
};

export default CartOneBusinessPrice;