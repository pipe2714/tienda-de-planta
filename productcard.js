// src/components/ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  console.log('Producto:', product); // Añade esta línea para depuración

  if (!product) {
    return <p>Producto no disponible</p>;
  }

  return (
    <div className="product-card">
      <img src={product.image || 'ruta/a/imagen-por-defecto.jpg'} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;









