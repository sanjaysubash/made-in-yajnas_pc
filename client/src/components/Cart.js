import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.selectedOption} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <p>Total: ${calculateTotal()}</p>
        <button className="btn-primary">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
