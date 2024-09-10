import React, { useState } from "react"
import "../styles/cards.css"
import { Link } from "react-router-dom";

export const Cards = ({ image, text }) => {
    const [Favorite, setFavorite] = useState(false)

    const handleFavorite = () => {
        setFavorite(!Favorite)
    }

    return (
        <div className="card rounded-5" style={{background: "#fcecf9"}}>
            <div className="img-container bg-light">
                <img src={image} className="img-top" alt={text}></img>
            </div>
            <div className="card-body">
                <h3 className="card-title">Nombre Producto</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui, repellendus aspernatur amet in aut atque suscipit veniam minima eum consequuntur vero nesciunt porro earum ex nulla accusamus itaque illo.</p>
                <h5 className="card-text">Precio $$</h5>
            </div>
            <div className="card-body btn">
                <Link to={"/productdetails"} className="btn btn-light">
                    Ver Producto
                </Link>
                <button className="btn btn-secondary" style={{background: "#A44694"}}>
                    Comprar
                </button>
            </div>
            <div
                className={`favorite-btn position-absolute top-0 end-0 mt-2 me-3 ${Favorite ? "text-danger" : "text-secondary"}`}
                onClick={handleFavorite}
                aria-label="Agregar a favoritos"
            >
                <i className={"fas fa-heart"}></i>
            </div>
        </div>
    )
}
