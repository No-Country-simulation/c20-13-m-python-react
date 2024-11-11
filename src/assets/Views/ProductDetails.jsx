import React, { useState } from "react";
import imgArandanos from "../img/Arandanos-BerryChill.png";
import { CardsCarousel } from "../components/CardsCarousel";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { Link } from "react-router-dom";
import "../styles/product-details.css";

export const ProductDetails = () => {
    const [quantity, setQuantity] = useState(0.5);

    const increment = () => {
        setQuantity(prevQuantity => (Number(prevQuantity) + 0.5).toFixed(1));
    };

    const decrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = Number(prevQuantity) - 0.5;
            return newQuantity >= 0.5 ? newQuantity.toFixed(1) : prevQuantity;
        });
    };

    const addQuantity = () => {
        console.log(`Agregando ${quantity} unidades al carrito`);
    };

    return (
        <div className="product-details">
            <div className="row">
                <div className="col">
                    <div className="card rounded-5">
                        <img src={imgArandanos} className="product-image" alt="Product" />
                    </div>
                </div>
                <div className="col">
                    <div className="container product-info">
                        <h2 className="product-name">Arándanos</h2>
                        <p className="product-details-text">Congelados</p>
                        <p className="product-details-text">100% Natural, sin agregados ni aditivos.</p>
                        <h2 className="product-price">$ 9.700</h2>

                        <div className="d-flex align-items-center">
                            <button className="quantity-button" onClick={increment} style={{ background: "#A44694" }}>+</button>
                            <span className="mx-2">{quantity}</span>
                            <button className="quantity-button" onClick={decrement} style={{ background: "#A44694" }}>-</button>
                            <button className="add-button" onClick={addQuantity} style={{ background: "#A44694" }}>Agregar</button>
                        </div>

                        <div className="container additional-info">
                            <h5><strong>Información Nutricional</strong></h5>
                            <h6><strong>Porción: 100g (1 plato hondo)</strong></h6>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum officia odit eum, expedita quibusdam deleniti. Neque maiores ut nostrum consequuntur molestias sunt natus, a nobis dicta suscipit quo velit fuga?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CardsCarousel />
            <div className="button m-5">
                <Link to={"/products"} className="text-dark w-25">Seguir Comprando</Link>
            </div>
            <WhatsAppIcon />
        </div>
    );
}
