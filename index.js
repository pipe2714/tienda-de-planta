// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './styles.css'; // Asegúrate de que el archivo de estilos se llama correctamente

// Renderiza la aplicación y proporciona el store de Redux a la misma
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // Asegúrate de que el ID del elemento HTML coincida con el de tu archivo HTML
);

