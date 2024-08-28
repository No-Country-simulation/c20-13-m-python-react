import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Cards.css'

export const Cards = ({image, text}) => {

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={text}></img>
            <div className="card-body d-flex justify-content-center">
                <button className="btn btn-primary">
                    Comprar
                </button>
            </div>
        </div>
    )
}



