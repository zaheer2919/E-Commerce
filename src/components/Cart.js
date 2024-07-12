import React from 'react';

const Cart = ({ cart, onRemoveFromCart, onAdjustQuantity }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => onAdjustQuantity(item.id, Number(e.target.value))}
            />
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;