import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "/src/assets/img/logo.png";
import "../styles/img-carousel.css"

export const ImgCarousel = () => {
    return (
        <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active container d-flex justify-content-center mb-5" data-bs-interval="5000">
                    <img src={logo} className="d-block w-25" alt="Slide 1"></img>
                </div>
                <div className="carousel-item container d-flex justify-content-center mb-5" data-bs-interval="5000">
                    <img src={logo} className="d-block w-25" alt="Slide 2"></img>
                </div>
                <div className="carousel-item container d-flex justify-content-center mb-5" data-bs-interval="5000">
                    <img src={logo} className="d-block w-25" alt="Slide 3"></img>
                </div>
                <div className="carousel-item container d-flex justify-content-center mb-5" data-bs-interval="5000">
                    <img src={logo} className="d-block w-25" alt="Slide 4"></img>
                </div>
                <div className="carousel-item container d-flex justify-content-center mb-5" data-bs-interval="5000">
                    <img src={logo} className="d-block w-25" alt="Slide 5"></img>
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
