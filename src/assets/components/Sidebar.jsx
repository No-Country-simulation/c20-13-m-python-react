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
        <li>📁 Admin. para Berrychill</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
