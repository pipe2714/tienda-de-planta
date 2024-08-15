// src/pages/CartPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import CartItem from '../components/cartitem';

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart);

  const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Header />
      <h2>Tu Carrito</h2>
      <div className="cart-list">
        {cart.length > 0 ? (
          cart.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <p>Tu carrito está vacío</p>
        )}
      </div>
      <p>Total Plantas: {totalItems}</p>
      <p>Total costo: ${totalCost.toFixed(2)}</p>
      <button>Checkout (Esperando)</button>
      <Link to="/">Continúa comprando</Link>
    </div>
  );
};

export default CartPage;



