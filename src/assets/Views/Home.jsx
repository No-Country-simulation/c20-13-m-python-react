import React from "react";
import Food from "../img/Food.jpeg";;
import { Link } from "react-router-dom";
import "../styles/home.css";
import { MarketFooter } from "../components/MarketFooter";
import VG from "../img/VG.png";
import home from "../img/home.png";
import HomeCard from "../components/homeCard";

const Home = () => {
  return (
    <div className="home vh-100">

      <header className="container text-center">
        <img src={VG} alt="VitalGreen Logo" />

      <header>
        <h1 className="text-white">VitalGreens</h1>

      </header>
      <section>
        <HomeCard />
      </section>

      <img className="bgimg" src={home} alt="" />
      <MarketFooter />
    </div>
  );
};

export default Home;
