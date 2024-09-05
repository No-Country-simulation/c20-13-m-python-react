import React from "react";
import Food from "/src/assets/img/food.jpeg";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { Pay } from "./Pay";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home vh-100">
      <header>
        <h1>MarketPlace</h1>
      </header>
      <section className="container">
        <img className="img-fluid" src={Food} alt="Berrychill Logo" />
      </section>
      <div className="bt d-grid col-xm-6 col-md-4 col-xl-2 mx-auto">
        <Link to={"/products"}>
          <button type="button" className="btn btn-secondary btn-lg">
            Comprar
          </button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
