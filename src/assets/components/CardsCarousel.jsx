import React from "react";
import { Cards } from "./Cards";
import logo from "../img/logo.png";
import "../styles/cards-carousel.css";


export const CardsCarousel = () => {
    return (
        <>
            <div className="container interest-info">
                <h3>También te puede interesar</h3>
            </div>
            <div id="cardsCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active container d-flex justify-content-center d-block">
                        <Cards alt="Slide 1" />
                    </div>
                    <div className="carousel-item active container d-flex justify-content-center d-block">
                        <Cards alt="Slide 2" />
                    </div>
                    <div className="carousel-item active container d-flex justify-content-center d-block">
                        <Cards alt="Slide 3" />
                    </div>
                    <div className="carousel-item active container d-flex justify-content-center d-block">
                        <Cards alt="Slide 4" />
                    </div>
                    <div className="carousel-item active container d-flex justify-content-center d-block">
                        <Cards alt="Slide " />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#cardsCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#cardsCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
