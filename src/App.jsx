import React from 'react';
import './App.css';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/Details/ProductDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default App;
