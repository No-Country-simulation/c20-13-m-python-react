import React from "react"
import "../styles/cards.css"
import { WhatsAppIcon } from "../components/WhatsAppIcon.jsx";
import { Link } from "react-router-dom";

export const Cards = ({ image, text }) => {

    return (
        <div className="card rounded-5">
            <div className="img-container">
                <img src={image} className="img-top" alt={text}></img>
            </div>
            <div className="card-body">
                <h3 className="card-title">Nombre Producto</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui, repellendus aspernatur amet in aut atque suscipit veniam minima eum consequuntur vero nesciunt porro earum ex nulla accusamus itaque illo.</p>
                <h5 className="card-text">Precio $$</h5>
            </div>
            <div className="card-body d-flex justify-content-center">
                <Link to={"/productdetails"} className="btn btn-light">
                    Ver Producto
                </Link>
                <button className="btn btn-secondary">
                    Comprar
                </button>
            </div>
            <WhatsAppIcon />
        </div>
    )
}
