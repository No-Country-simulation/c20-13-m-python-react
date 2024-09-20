import React, { useState } from "react";
import imgArandanos from "../img/Arandanos-BerryChill.png";
import "../styles/cards.css";
import { Link } from "react-router-dom";

export const Cards = () => {
  const [Favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!Favorite);
  };

  return (
    <div className="card rounded-5" id="product-card">
      <img src={imgArandanos} className="img-top" alt={""}></img>
      <h3 className="card-title fs-5 fw-bold">Arándanos</h3>
      <p className="card-text fs-6">Congelados - 100% Natural.</p>
      <h5 className="card-text fs-4 fw-bold">
        $ 9.700<span className="fs-6 fw-normal"> x kilo</span>
      </h5>
      <Link to={"/productdetails"} className="btn btn-light text-dark">
        Ver Producto
      </Link>
      <button className="btn btn-secondary" style={{ background: "#A44694" }}>
        Comprar
      </button>
      <i
        className={`fa-regular fa-heart favorite-btn position-absolute top-0 end-0 mt-2 me-3 ${
          Favorite ? "fa-solid fa-heart text-danger" : ""
        }`}
        onClick={handleFavorite}
        aria-label="Agregar a favoritos"
      ></i>
    </div>
  );
};
