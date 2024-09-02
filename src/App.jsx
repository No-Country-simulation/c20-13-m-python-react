import React from 'react';
import './App.css';
import Home from './assets/components/Home';
import { Products } from "./assets/Views/Products";
import Navbar from './assets/components/Navbar';
import Sidebar from './assets/components/Sidebar';
import Cart from './assets/components/Cart';

function App() {

  return (
    <>
      <Navbar/>
      <div className="main-content">
        <Sidebar />
        <ProductList />
        <Cart />
      </div>
      <Home/>
      <Products/>
    </>
  )
}

export default App
