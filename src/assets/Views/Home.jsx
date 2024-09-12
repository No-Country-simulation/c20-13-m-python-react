import React from "react";
import "../styles/home.css";
import { MarketFooter } from "../components/MarketFooter";
import vitalGreens from "../img/vitalGreens.png";
import HomeCard from "../components/homeCard";

const Home = () => {
  return (
    <div className="text-center">
      <header className="container ">
        <img className="logo" src={vitalGreens} alt="VitalGreen Logo" />
        <h6>Todo lo bueno,</h6>
        <h6>en nuestro Marketplace</h6>
      </header>
      <section className="text-center">
        <HomeCard />
        <img
          className="bgimg"
          src="https://s3-alpha-sig.figma.com/img/4ed3/19a5/47d3c528594ee660659426410fd8c875?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=phzNUBntJoDh8VZUfC6MrHpfcjYiv8yZDn0EPZz-K9~kknUDDk1f4plvAWTje6D1yddfWTmkzDLWxYcyUGc5ECd82uC8zYXLRlykT2a593tz8pBUGi0NKyOo8QY-pxhrrUHMZZZztTCGFdi~hKUoUmMEtEhgJmwf~i2ahflA0o0VeqbfaOppkSudf5T4jkvcaP71XSJwxyLIFb1EHu7hURM2mM5TMbPKvt2RDDJ0r3UTMPrJTbv2rF~0j0eXDEbKfWKLPTg5bA9wOANJab5u7Y-XSJS1--0EW~zC0rXMPUQXPeUjGuJob9bAZhYmR3YBm58PSHC4eZMCgMjLDQRdPQ__"
          alt=""
        />
      </section>
      <MarketFooter />
    </div>
  );
};

export default Home;
