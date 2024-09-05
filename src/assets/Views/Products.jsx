import React from "react"
import "../styles/products.css"
import logo from "/src/assets/img/logo.png";
import { Cards } from "../components/Cards.jsx"
import { Carousel } from "../components/Carousel.jsx"

export const Products = () => {

  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    image: logo,
    text: `Producto ${index + 1}`,
  }))

  return (
    <React.Fragment>
      <Carousel />
      <div className="container-product">
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-6 mb-4" key={product.id}>
              <Cards image={product.image} text={product.text} />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

