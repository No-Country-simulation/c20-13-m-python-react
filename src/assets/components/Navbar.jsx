import React from 'react';
import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Shop BerryChill</div>
        <div className="navbar-icons">
          <span>🛒 Carrito</span>
          <span>👤 Iniciar Sesión</span>
          <span>☰</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
