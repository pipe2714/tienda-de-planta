// src/pages/ProductListPage.js
import React from 'react';
import ProductCard from '../components/productcard';

const ProductListPage = () => {
  // Datos de muestra
  const products = [
    { id: 1, name: 'Planta Anturio Exota', price: 58000, image: 'https://sembramos.com.co/wp-content/uploads/2023/05/ARMONIA-11-768x768.png' },
    { id: 2, name: 'Planta Rosa Del Desierto', price: 65000, image: 'https://sembramos.com.co/wp-content/uploads/2021/09/MG_6571-scaled-e1631799563670-768x768.jpg' },
    { id: 3, name: 'Planta Corona De Cristo', price: 40000, image: 'https://sembramos.com.co/wp-content/uploads/2018/12/corona-de-espinas-768x702.jpg' },
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;







