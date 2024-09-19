import React from "react";
import Footer from "../components/Footer";
import "../styles/pay.css";
import { SiMercadopago } from "react-icons/si";
import { ImgCarousel } from "../components/ImgCarousel";

export const Pay = () => {
  return (
    <>
      <ImgCarousel />
      <div className="pay">
        <h1>Elegí como pagar</h1>
        <div
          className="dropdown d-flex align-items-center mt-4"
          style={{ gap: "21px", border: "solid 1px" }}
        >
          <h3>Transferencia</h3>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <SiMercadopago size={52} />
            Mercado Pago
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a className="dropdown-item active" href="#">
                Action
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container card text-center" style={{ maxWidth: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">Pago contra entrega</h5>
          <p className="card-text">
            Coordina el pago y la entrega con el vendedor
          </p>
          <a href="#" className="btn btn-primary" style={{ width: "18rem" }}>
            Realizar pedido
          </a>
        </div>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
};
