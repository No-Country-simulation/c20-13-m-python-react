import React from "react";
import Footer from "../components/Footer";
import { CheckoutForm } from "../components/ChekoutForm";
import "../styles/checkout.css";
import Navbar from "../components/Navbar";
import CheckoutList from "../components/CheckoutList";

export const Checkout = () => {
  return (
    <>
      <Navbar />
      <section className="checkout mt-4">
        <div className="text-center">
          <h2>Finaliza tu compra</h2>
          <p>
            Ya tienes una cuenta?
            <span> Hacé click aquí </span> para iniciar sesión o registrarte
          </p>
          <br />
        </div>
        <CheckoutList />
        <CheckoutForm />
      </section>
      <Footer />
    </>
  );
};
