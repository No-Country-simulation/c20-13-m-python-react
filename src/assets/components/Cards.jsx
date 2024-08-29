import React from 'react'
import '../styles/Cards.css'

export const Cards = ({ image, text }) => {

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={text}></img>
            <h3 className="card-title">Nombre Producto</h3>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui, repellendus aspernatur amet in aut atque suscipit veniam minima eum consequuntur vero nesciunt porro earum ex nulla accusamus itaque illo.</p>
            <div className="card-body d-flex justify-content-center">
                <button className="btn btn-secondary">
                    Comprar
                </button>
            </div>
        </div>
    )
}



