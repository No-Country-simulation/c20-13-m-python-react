import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from "../img/Frutillas-Carousel.jpeg";
import img2 from "../img/FrutosRojos-Carousel.jpeg";
import img3 from "../img/Fresas-BerryChill.jpeg";
import "../styles/img-carousel.css"

export const ImgCarousel = () => {
    return (
        <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src={img1} className="d-block mt-0" alt="Slide 1"></img>
                    <div className="inner-text">
                        <span className="fs-2 text-dark">ENVIOS GRATIS</span>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={img2} className="d-block mt-0" alt="Slide 2"></img>
                    <div className="inner-text">
                        <span className="fs-3 text-dark">AHORA PODES PAGAR CON</span>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={img3} className="d-block mt-0" alt="Slide 3"></img>
                    <div className="inner-text">
                        <span className="fs-4 text-dark">Los mejores frutos congelados, a un click de distancia.</span>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
