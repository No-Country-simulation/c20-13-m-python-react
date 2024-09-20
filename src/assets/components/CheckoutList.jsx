import React from "react";

const CheckoutList = () => {
  return (
    <div className="container text-center p-4">
      <ul className="list-group list-group-horizontal row">
        <h4 className="text-start">Tu pedido</h4>
        <li className="list-group-item col">
          <strong>Tu Producto</strong>
        </li>
        <li className="list-group-item col">
          <strong>Subtotal</strong>
        </li>
      </ul>
      <ul className="list-group list-group-horizontal row">
        <li className="list-group-item col">Arándanos x1 kg</li>
        <li className="list-group-item col">$Arg 9700</li>
      </ul>
      <ul className="list-group list-group-horizontal row">
        <li className="list-group-item col">Envío</li>
        <li className="list-group-item col">Gratis</li>
      </ul>
      <ul className="list-group list-group-horizontal row">
        <li className="list-group-item col">
          <strong>Total</strong>
        </li>
        <li className="list-group-item col">$Arg 9700</li>
      </ul>
    </div>
  );
};

export default CheckoutList;
