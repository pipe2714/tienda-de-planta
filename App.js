// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicio from './pages/homepage'; // Asegúrate de que el nombre del archivo sea correcto
import PaginaListaProductos from './pages/productlistpage'; // Asegúrate de que el nombre del archivo sea correcto
import PaginaCarrito from './pages/cartpage';
import Encabezado from './components/header';

const App = () => {
  return (
    <Router>
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/productos" element={<PaginaListaProductos />} />
        <Route path="/carrito" element={<PaginaCarrito />} />
      </Routes>
    </Router>
  );
};

export default App;






