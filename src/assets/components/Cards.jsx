import React, { useState } from "react"
import imgArandanos from "../img/Arandanos-BerryChill.png"
import "../styles/cards.css"
import { Link } from "react-router-dom";

export const Cards = () => {
    const [Favorite, setFavorite] = useState(false)

    const handleFavorite = () => {
        setFavorite(!Favorite)
    }

    return (
        <div className="row justify-content-center">
            <div className="col">
                <div className="card rounded-5" style={{ background: "#fcecf9" }}>
                    <div className="img-container bg-light">
                        <img src={imgArandanos} className="img-top" alt={""}></img>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Nombre Producto</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h5 className="card-text">Precio $$</h5>
                    </div>
                    <div className="card-body btn">
                        <Link to={"/productdetails"} className="btn btn-light">
                            Ver Producto
                        </Link>
                        <button className="btn btn-secondary" style={{ background: "#A44694" }}>
                            Comprar
                        </button>
                    </div>
                    <i className={`fa-solid fa-heart favorite-btn position-absolute top-0 end-0 mt-3 me-3 ${Favorite ? "text-danger" : "text-black-50"}`}
                        onClick={handleFavorite}
                        aria-label="Agregar a favoritos"
                    >
                    </i>
                </div>
            </div>
        </div>
    )
}
