// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener esta dependencia instalada
import { useSelector } from 'react-redux'; // Importar useSelector para acceder al estado del carrito

const Header = () => {
  // Obtener el número total de artículos en el carrito desde el estado de Redux
  const cartItemCount = useSelector(state => state.cart.cart.reduce((total, item) => total + item.quantity, 0));

  return (
    <header>
      <div className="header-title">
        <h1>Bienvenidos a Plantaciones con Juan</h1> {/* Mensaje de bienvenida */}
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/carrito">Carrito</Link>
      </nav>
      {/* Mostrar el conteo del carrito solo si hay artículos */}
      {cartItemCount > 0 && (
        <div>
          <span>{cartItemCount}</span> {/* Conteo de artículos en el carrito */}
        </div>
      )}
    </header>
  );
};

export default Header;




