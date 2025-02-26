// src/components/home_tab_components/CartThreeBusinessPrice.jsx
import React from 'reat';
import './CartThreeBusinessPrice.css';

const defaultProps = {
  text: '$19.50', // Updated from '$ 15.49'
};

const CartThreeBusinessPrice = ({ text = defaultProps.text }) => {
  return (
    <div className="cart-three-business-price">
      {text}
    </div>
  );
};

export default CartThreeBusinessPrice;