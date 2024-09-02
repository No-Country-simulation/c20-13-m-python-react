// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/products.css'
import logo from "/src/assets/img/logo.png";
import { Cards } from '../components/Cards.jsx'
import { WhatsAppIcon } from '../components/WhatsAppIcon.jsx';
import Footer from '../components/Footer.jsx';

export const Products = () => {

  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    image: logo,
    text: `Producto ${index + 1}`,
  }))

  return (
    <div className="container-product">
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-6 mb-4" key={product.id}>
            <Cards image={product.image} text={product.text} />
          </div>
        ))}
      </div>
      <WhatsAppIcon />
      <Footer />
    </div>
  );
};

