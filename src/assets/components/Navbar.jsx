import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../img/logo.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="navbar">
      <div className='container'>
        <nav className="navbar justify-content-between">
          <a className = "nav-brand"href="">
            <img src={logo} alt="" width="30" height="30"/>
          </a>
        </nav>
        <div className="navbar-icons">
          <div className="cart-icon" onClick={toggleCart}>🛒</div>
          <div className="login-icon">
            <a className="nav-link"href="RegistrationForm">👤 Iniciar Sesión</a>
          </div>
          <div className="navbar-toggler" onClick={toggleDrawer}>
            <span className="navbar-toggler-icon"></span>
          </div>
        </div>
      </div>


      {isDrawerOpen && (
        <div className="drawer">
          <div className="drawer-content">
            <h2>Navegación</h2>
            <ul className="nav-list">
              <li onClick={toggleDrawer}>Frutos Rojos</li>
              <li onClick={toggleDrawer}>Mermeladas</li>
              <li onClick={toggleDrawer}>Pulpas</li>
              <li onClick={toggleDrawer}>Quienes Somos</li>
              <li onClick={toggleDrawer}>Perfil</li>
              <li onClick={toggleDrawer}>Editar mi Perfil</li>
              <li onClick={toggleDrawer}>Compras pendientes</li>
              <li onClick={toggleDrawer}>Favoritos</li>
              <li onClick={toggleDrawer}>Historial</li>
              <li onClick={toggleDrawer}>Admin. para Berrychill</li>
              <li onClick={toggleDrawer}>Editar Productos</li>
              <li onClick={toggleDrawer}>Personalizar Tienda</li>
              <li onClick={toggleDrawer}>Cerrar Sesión</li>
            </ul>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="cart-drawer">
          <div className="cart-content">
            <p>Carrito de Compras</p>
            <div className="product-item">
              <img src="https://via.placeholder.com/100" alt="Producto" />
            </div>
            <h4>Arándanos</h4>
            <div className="product-details">
              <p>Congelado
                100% Natural, sin agregados
                ni aditivos.</p>
            </div>
            <h4>$9.700</h4>
            <div className="buttons">
              <button className='quantity-btn decrement'>-</button>
              <span className="quantity-display">0.5</span>
              <button className="quantity-btn increment">+</button>
              <button className="quantity-button" style={{ background: "#A44694",
                borderRadius: '20px', color: '#FFFFFF', padding: '10px 20px', fontSize: '16px' }}>Agregar</button>
            </div>
            <h3>TOTAL: $9.700</h3>
            <div className="buttons">
              <button className="add-button" style={{ background: "#A44694", fontSize: '16px' }}>Finalizar Compra</button>
              <button className="add-button" style={{ background: "#FFFFFF", border: '1px solid #A44694', borderRadius: '20px',
                color: '#A44694'}}>Seguir comprando</button>
            </div>
            <div className='close-button'>
              <button onClick={toggleCart}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
