import React from "react";
import Food from "../img/Food.jpeg";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { MarketFooter } from "../components/MarketFooter";
import VG from "../img/VG.png";
import home from "../img/home.png";
import HomeCard from "../components/HomeCard.jsx";

const Home = () => {
  return (
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
  );
};

export default Home;
