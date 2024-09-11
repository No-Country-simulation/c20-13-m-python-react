import React from "react";
import logo from "../img/logo.png";
import biomac from "../img/biomac.png";
import fitfood from "../img/fitfood.png";
import nevada from "../img/nevada.png";
import friodep from "../img/friodep.png";
import fresh from "../img/fresh.png";
import "../styles/homeCard.css";

const HomeCard = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        <img className="col bs" src={friodep} alt="Company logo" />
        <img className="col bs" src={biomac} alt="Company logo" />
        <img className="col bs" src={fitfood} alt="Company logo" />
      </div>
      <div className="row align-items-center justify-content-center">
        <img className="col bs" src={nevada} alt="Company logo" />
        <img className="col logo" src={logo} alt="Company logo" />
        <img className="col bs" src={fresh} alt="Company logo" />
      </div>
    </div>
  );
};

export default HomeCard;
