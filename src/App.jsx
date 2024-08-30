import React from 'react';
import './App.css';
import Home from './assets/components/Home';
import { Products } from "./assets/Views/Products";
import Navbar from './assets/components/Navbar';

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Products/>
    </>
  )
}

export default App
