import React from "react";
import logo from "../img/logo.png"
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import "../styles/product-details.css"

export const ProductDetails = () => {
    return (
        <div className="product-details">
            <div className="row m-3">
                <div className="col-sm-6">
                    <div className="card rounded-5">
                        <div className="image">
                            <img src={logo} className="product-image" alt={""} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="container p-5">
                        <div className="product-info">
                            <h2 className="product-name d-flex justify-content-start">Nombre del Producto</h2>
                            <p className="product-details-text">
                                Detalles del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h1 className="product-price d-flex justify-content-start">Precio $$</h1>
                            <div className="buttons d-flex justify-content-start">
                                <button className="quantity-button bg-secondary text-light">Agregar</button>
                            </div>
                            <div className="buttons d-flex justify-content-start">
                                <button className="add-to-cart-button bg-secondary text-light">Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="additional-info">
                <h5 className="d-flex justify-content-start">
                    <strong>Informacion Nutricional</strong>
                </h5>
                <h6 className="d-flex justify-content-start">
                    <strong>Porción:</strong>
                </h6>
                <p className="d-flex justify-content-start">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum officia odit eum, expedita quibusdam deleniti. Neque maiores ut nostrum consequuntur molestias sunt natus, a nobis dicta suscipit quo velit fuga?
                </p>
            </div>
            <WhatsAppIcon />
        </div>
    );
}