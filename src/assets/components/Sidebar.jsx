import React from 'react';
import '../../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Categorías</h3>
      <ul>
        <li>🍒 Frutos Rojos</li>
        <li>🍯 Mermeladas</li>
        <li>💜 Pulpas</li>
        <li>📜 Quienes somos</li>
        <li>👤 Perfil</li>
          <li>📁 Editar mi Perfil</li>
          <li>Compras pendientes</li>
          <li>Favoritos</li>
          <li>Historial</li>
        <li>Admin. para Berrychill</li>
          <li>Editar Productos</li>
          <li>Personaizar tienda</li>
        <li>Cerrar Sesion</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
