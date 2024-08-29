import React from "react";
import logo from "/src/assets/img/logo.png";
import "/src/home.css";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="container">
        <img className="img-fluid" src={logo} alt="Berrychill Logo" />
      </div>
      <div className="container bt">
      <button type="button" className="btn btn-success btn-lg w-100">
       Comprar
      </button>
      </div>
    </>
  );
};

export default Home;
