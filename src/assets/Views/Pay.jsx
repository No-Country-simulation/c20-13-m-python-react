// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pay.css";

export const Pay = () => {
  return (
    <>
      <Navbar />
      <div className="pay">
        <h1>Elegí como pagar</h1>
        <h3>Pagás: $x</h3>
        <button type="button" className="btn btn-secondary btn-sm">
          Ir a Mercado Pago
        </button>
      </div>
      <Footer/>
    </>
  );
};
