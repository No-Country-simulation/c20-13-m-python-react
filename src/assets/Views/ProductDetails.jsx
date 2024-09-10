import React from "react";
import logo from "../img/logo.png";
import { CardsCarousel } from "../components/CardsCarousel";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import "../styles/product-details.css";

export const ProductDetails = () => {
    return (
        <div className="product-details">
            <div className="row align-items-start">
                <div className="col-md-6 col-12">
                    <div className="card rounded-5">
                        <div className="image">
                            <img src={logo} className="product-image" alt="Product" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="container product-info">
                        <h3 className="product-name">Nombre del Producto</h3>
                        <p className="product-details-text">
                            Detalles del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <h2 className="product-price">Precio $$</h2>
                        <div className="buttons">
                            <button className="quantity-button" style={{ background: "#A44694" }}>Agregar</button>
                            <button className="add-button" style={{ background: "#A44694" }}>Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container additional-info">
                <h5><strong>Información Nutricional</strong></h5>
                <h6><strong>Porción:</strong></h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum officia odit eum, expedita quibusdam deleniti. Neque maiores ut nostrum consequuntur molestias sunt natus, a nobis dicta suscipit quo velit fuga?
                </p>
            </div>
            <CardsCarousel />
            <div className=" d-flex justify-content-center">
                <button className="add-button text-dark w-25">Seguir Comprando</button>
            </div>
            <WhatsAppIcon />
        </div>
    );
}