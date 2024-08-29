import React from 'react'
import '../styles/Products.css'
import logo from "/src/assets/img/logo.png";
import { Cards } from '../components/Cards.jsx'
import { Carousel } from 'react-bootstrap';

export const Products = () => {

  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    image: logo,
    text: `Producto ${index + 1}`,
  }))

  const productGroups = []
  for (let i = 0; i < products.length; i += 2) {
    productGroups.push(products.slice(i, i + 2))
  }

  return (
    <div className="container">
      <Carousel>
      {productGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {group.map((product) => (
                <div className="col-md-6 mb-4" key={product.id}>
                  <Cards image={product.image} text={product.text} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

