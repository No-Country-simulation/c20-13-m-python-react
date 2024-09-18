import React from "react";
import Footer from "../components/Footer";
import { CheckoutForm } from "../components/ChekoutForm";
import "../styles/checkout.css";
export const Checkout = () => {
  return (
    <>
      <section className="checkout">
        <div className="text-center">
          <h2>Finaliza tu compra</h2>
          <p>
            Ya tienes una cuenta? <br />
            <span>Hacé click aquí</span> para inicicar sesión o{" "}
            <span>regístrate aquí.</span>
          </p>
          <br />
          <h4>Tu pedido</h4>
        </div>
        <CheckoutForm />
      </section>
      <Footer />
    </>
  );
};
