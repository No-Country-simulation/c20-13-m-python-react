import React from "react";

export const CheckoutForm = () => {
  return (
    <form className="container row g-3">
      <h5>Datos de contacto</h5>
      <div className="col-12">
        <label htmlFor="inputName" className="form-label">
          Nombre y apellido
        </label>
        <input type="text" className="form-control" id="inputName" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Dirección
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Casilda"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputPhone" className="form-label">
          Teléfono
        </label>
        <input
          type="text"
          className="form-control"
          id="inputPhone"
          placeholder="+34000000"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputEmail" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="email@mail.com"
        />
      </div>
      <h3>Opciones de envío</h3>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Lunes entre las 17:00hs y 18:30hs
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Martes entre las 17:30hs y 18:30hs
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Miércoles entre las 18:30hs y 19:30hs
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Jueves entre las 13:00hs y 14:00hs
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Viernes entre las 18:00hs y 19:00hs
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Sábado entre las 12:00hs y 13:00hs
        </label>
      </div>
      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn text-white"
          style={{ backgroundColor: "#A44694", border: "radius" }}
        >
          Continuar
        </button>
      </div>
    </form>
  );
};
