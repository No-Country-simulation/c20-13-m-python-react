import React from "react";
import { Cards } from "./Cards";
import logo from "../img/logo.png";
import "../styles/cards-carousel.css";


export const CardsCarousel = () => {
    return (
        <>
            <div className="container interest-info mt-5 mb-5">
                <h3>También te puede interesar:</h3>
            </div>
            <div id="carouselIndicators" className="carousel slide">
                <div className="carousel-content">
                    <div className="carousel-card active">
                        <div className="d-flex flex-row overflow-scroll">
                            <div className="col-4 m-2">
                                <Cards />
                            </div>
                            <div className="col-4 m-2">
                                <Cards />
                            </div>
                            <div className="col-4 m-2">
                                <Cards />
                            </div>
                            <div className="col-4 m-2">
                                <Cards />
                            </div>
                            <div className="col-4 m-2">
                                <Cards />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
