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
    <div className="row align-items-center justify-content-center">
      <div className="col-sm-3">
        <div className="card-body">
          <img className="logo" src={logo} alt="Company logo" />
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card-body">
          <img className="bs" src={biomac} alt="Company logo" />
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card-body">
          <img className="bs" src={fitfood} alt="Company logo" />
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card-body">
          <img className="bs" src={nevada} alt="Company logo" />
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card-body">
          <img className="bs" src={friodep} alt="Company logo" />
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card-body">
          <img className="bs" src={fresh} alt="Company logo" />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
