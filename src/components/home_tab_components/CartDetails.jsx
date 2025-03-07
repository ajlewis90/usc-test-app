import React from 'react';
import './CartDetails.css';

const CartDetails = ({ cartItems, businessName, onClose }) => {
  // Determine the credit amount and text based on the business
  let walletCreditText = '';
  let creditAmount = 0;

  if (businessName === 'The Warehouse') {
    walletCreditText = 'Please apply credit';
    creditAmount = 0; // No credit applied
  } else if (businessName === 'New Pharma') {
    walletCreditText = '$7.00 Credit applied!';
    creditAmount = 7; // $7.00 credit for New Pharma
  } else { // Default for Baker N Cakes
    walletCreditText = '$10.00 Credit applied!';
    creditAmount = 10; // $10.00 credit for Baker N Cakes
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.total.replace('$', '')), 0).toFixed(2);

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
        <div className="summary-row">
          <span>Wallet Credit:</span>
          <button className="coupon-button">{walletCreditText}</button>
        </div>
        <div className="summary-row total">
          <span>Grand Total:</span>
          <span>${(parseFloat(subtotal) - creditAmount).toFixed(2)}</span>
          {/* Grand Total = Subtotal - creditAmount */}
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