import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Checkout = () => {
  return (
    <>
      <Navbar />
      <h2>Finaliza tu compra</h2>
      <p>
        Ya tienes una cuenta?<span>Hacé click aquí</span>para inicicar sesión o{" "}
        <span>regístrate aquí.</span>
      </p>
      <Footer />
    </>
  );
};
