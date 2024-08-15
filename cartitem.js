import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../redux/actions'; // Asegúrate de que la ruta es correcta

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div>
        <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
        <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;


