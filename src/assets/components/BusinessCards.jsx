import React from "react";

export const BusinessCards = ({ image, title }) => {
  return (
    <div className="card" style={{width: "18rem" }}>
  <img src={image} className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>
  );
};
