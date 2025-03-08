import React, { useState } from 'react';
import './CartDetails.css';

const CartDetails = ({ cartItems, businessName, onClose }) => {
  // State to track if credit has been applied
  const [creditApplied, setCreditApplied] = useState({
    'Baker N Cakes': false,
    'New Pharma': false,
    'The Warehouse': false,
  });

  // Determine the wallet balance text and credit amount based on the business
  let walletBalanceText = '';
  let creditAmount = 0;

  if (businessName === 'The Warehouse') {
    walletBalanceText = 'Wallet Balance ($25):';
    creditAmount = creditApplied[businessName] ? 25 : 0; // Apply $25 credit if button clicked
  } else if (businessName === 'New Pharma') {
    walletBalanceText = 'Wallet Balance ($12):';
    creditAmount = creditApplied[businessName] ? 7 : 0; // Apply $7 credit if button clicked
  } else { // Default for Baker N Cakes
    walletBalanceText = 'Wallet Balance ($20):';
    creditAmount = creditApplied[businessName] ? 10 : 0; // Apply $10 credit if button clicked
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.total.replace('$', '')), 0).toFixed(2);

  // Handle Apply Credit button click
  const handleApplyCredit = () => {
    setCreditApplied((prev) => ({
      ...prev,
      [businessName]: true,
    }));
  };

  return (
    <div className="cart-details-container">
      <div className="cart-details-header">
        <h2>{businessName} Cart ({cartItems.length} items)</h2>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      <div className="cart-details-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-details-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <p className="cart-item-total">{item.total}</p>
          </div>
        ))}
      </div>
      <div className="cart-details-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="summary-row total">
          <span>{walletBalanceText}</span>
          <button
            className="apply-credit-button"
            onClick={handleApplyCredit}
            disabled={creditApplied[businessName]} // Disable button after credit is applied
          >
            {creditApplied[businessName] ? 'Credit Applied' : 'Apply Credit'}
          </button>
        </div>
        <div className="summary-row total">
          <span>Grand Total:</span>
          <span>${(parseFloat(subtotal) - creditAmount).toFixed(2)}</span>
        </div>
        <div className="shipping-info">
          <span>Congrats, you're eligible for Free Shipping</span>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartDetails;