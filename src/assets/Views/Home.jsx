import React from "react";
import logo from "/src/assets/img/logo.png";
import { Link } from "react-router-dom";
import "/src/home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <header className="container text-white">
          <h1>BerryChill</h1>
          <h2>Los mejores frutos congelados a un click de distancia</h2>
        </header>
        <section className="container">
          <img className="img-fluid" src={logo} alt="Berrychill Logo" />
        </section>
        <div className="bt d-grid col-xm-6 col-md-4 col-xl-2 mx-auto">
          <Link to={"/products"}>
            <button type="button" className="btn btn-secondary btn-lg">
              Comprar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
