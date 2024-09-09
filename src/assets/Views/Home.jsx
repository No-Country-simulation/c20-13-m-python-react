import React from "react";
import Food from "/src/assets/img/food.jpeg";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { Pay } from "./Pay";
import { MarketFooter } from "../components/MarketFooter";

const Home = () => {
  return (
    <div className="home vh-100">
      <header>
        <h1 className="text-white">VitalGreens</h1>
      </header>
      <section className="container">
        <img className="img-fluid" src={Food} alt="freshGreensAndVegetables" />
      </section>
      <MarketFooter />
    </div>
  );
};

export default Home;
