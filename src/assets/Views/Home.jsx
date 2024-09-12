import React from "react";
import Food from "../img/Food.jpeg";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { MarketFooter } from "../components/MarketFooter";
import VG from "../img/VG.png";
import home from "../img/home.png";
import HomeCard from "../components/homeCard";

const Home = () => {
  return (
<<<<<<< HEAD
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
        <Link to={"/aboutus"}>
        <p>Quienes Somos</p>
        </Link>
      </div>
    </>
=======
    <div className="home vh-100">
      <header className="container text-center">
        <img src={VG} alt="VitalGreen Logo" />
      </header>
      <section>
        <HomeCard />
      </section>
      <img
        className="bgimg"
        src="https://s3-alpha-sig.figma.com/img/4ed3/19a5/47d3c528594ee660659426410fd8c875?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=phzNUBntJoDh8VZUfC6MrHpfcjYiv8yZDn0EPZz-K9~kknUDDk1f4plvAWTje6D1yddfWTmkzDLWxYcyUGc5ECd82uC8zYXLRlykT2a593tz8pBUGi0NKyOo8QY-pxhrrUHMZZZztTCGFdi~hKUoUmMEtEhgJmwf~i2ahflA0o0VeqbfaOppkSudf5T4jkvcaP71XSJwxyLIFb1EHu7hURM2mM5TMbPKvt2RDDJ0r3UTMPrJTbv2rF~0j0eXDEbKfWKLPTg5bA9wOANJab5u7Y-XSJS1--0EW~zC0rXMPUQXPeUjGuJob9bAZhYmR3YBm58PSHC4eZMCgMjLDQRdPQ__"
        alt=""
      />
      <MarketFooter />
    </div>
>>>>>>> 79ed973a913ac5c977d2b6fbbcbc11c27e2819c2
  );
};

export default Home;
