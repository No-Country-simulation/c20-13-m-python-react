import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckoutForm } from "../components/ChekoutForm";
import "../styles/checkout.css"
export const Checkout = () => {
  return (
    <>
      <Navbar />
      <section className="checkout">
        <div className="text-center">
      <h2>Finaliza tu compra</h2>
        <p >
          Ya tienes una cuenta? <span>Hacé click aquí</span>para inicicar sesión
          o <span>regístrate aquí</span>
        </p>
        <br/>
        <h4>Tu pedido</h4>
        </div>
        {/* <ul className="list-group list-group-horizontal">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul> */}
      <CheckoutForm/>
      </section>
      <Footer />
    </>
  );
};
