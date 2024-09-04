import React from 'react'
import '../styles/cards.css'

export const Cards = ({ image, text }) => {

    return (
        <div className="card">
            <div>
            <img src={image} className="img-top" alt={text}></img>
            </div>
            <div className="card-body">
                <h3 className="card-title">Nombre Producto</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui, repellendus aspernatur amet in aut atque suscipit veniam minima eum consequuntur vero nesciunt porro earum ex nulla accusamus itaque illo.</p>
                <h5 className="card-text">Precio $$</h5>
            </div>
            <div className="card-body d-flex justify-content-center">
                <button className="btn btn-secondary">
                    Comprar
                </button>
            </div>
        </div>
    )
}
