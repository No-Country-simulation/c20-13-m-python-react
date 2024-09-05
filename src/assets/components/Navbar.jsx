import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Shop BerryChill</div>
        <div className="navbar-icons">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <span>☰</span>
          </TouchableOpacity>
          <Link to='/cart'>
            <span>🛒 Carrito</span>
          </Link>
          <span>👤 Iniciar Sesión</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
