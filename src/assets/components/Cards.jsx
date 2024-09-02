import React from 'react'
import '../styles/Cards.css'

export const Cards = ({image, text}) => {

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={text}></img>
            <div className="card-body d-flex justify-content-center">
                <button className="btn btn-secondary">
                    Comprar
                </button>
            </div>
        </div>
    )
}



