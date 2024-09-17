import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Cards } from "../components/Cards.jsx";
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
      <nav className='navbar navbar-light bg-white shadow'>
        <a className = "nav-brand"href=""></a>
          <img src={logo} alt="" width="30" height="30"/>
      </nav>
      <div className="cart-icon" onClick={toggleCart}>
        🛒
      </div>
      <div className="login-icon">
        <a className="nav-link"href="RegistrationForm"></a>
        👤 Iniciar Sesión
      </div>
      <div className="navbar-toggler" onClick={toggleDrawer}
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </div>

      {isDrawerOpen && (
        <div className="drawer">
          <div className="drawer-content">
            <h2>Navegación</h2>
            <ul>
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
            <h4>Arándanos x 0.5 kg</h4>
              <div className="product-details">
                <p>Congelado</p>
                <p>100% Natural, sin agregados
                  ni aditivos</p>
              </div>
            <h4>$9.700</h4>
            <div className="buttons">
              <button className="quantity-button" style={{ background: "#A44694",
                borderRadius: '20px', color: '#FFFFFF', padding: '10px 20px', fontSize: '16px' }}>Agregar</button>
            </div>
            <h3>TOTAL: $9.700</h3>
            <div className="buttons">
              <button className="add-button" style={{ background: "#A44694", borderRadius: '20px',
                 color: '#FFFFFF', padding: '10px 20px', fontSize: '16px' }}>Finalizar Compra</button>
              <button className="add-button" style={{ background: "#FFFFFF", border: '1px solid #A44694', borderRadius: '20px',
               color: '#A44694', padding: '10px 20px', fontSize: '16px' }}>Seguir comprando</button>
            </div>
            <button onClick={toggleCart}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
