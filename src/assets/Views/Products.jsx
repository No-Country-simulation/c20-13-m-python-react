import React from "react"
import "../styles/products.css"
import logo from "/src/assets/img/logo.png";
import { Cards } from "../components/Cards.jsx"
import { ImgCarousel } from "../components/ImgCarousel.jsx"
import Footer from '../components/Footer.jsx';
import { WhatsAppIcon } from '../components/WhatsAppIcon.jsx';


export const Products = () => {

  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    image: logo,
    text: `Producto ${index + 1}`,
  }))

  return (
    <React.Fragment>
      <ImgCarousel />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col col-md-3 mb-4" key={product.id}>
              <Cards image={product.image} text={product.text} />
            </div>
          ))}
        </div>
        <WhatsAppIcon />
        <Footer />
      </div>
    </React.Fragment>
  );
};

