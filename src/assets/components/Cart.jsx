import React from 'react';
import '../../styles/Cart.css';

function Cart() {
  return (
    <>
      <div className="cart">
        <h3>Carrito de Compras</h3>
        <div className="cart-item">
          <h4>Arándanos x 1 kg</h4>
          <p>$9.700</p>
          <button>Agregar</button>
          <button>Ver opciones de envío</button>
        </div>
        <button>Finalizar compra</button>
        <button>Seguir comprando</button>
      </div>
    </>
  );
}

export default Cart;
