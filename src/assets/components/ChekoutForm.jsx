import React from "react";

export const CheckoutForm = () => {
  return (
    <form className="container row g-3">
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
          Lunes
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Martes
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Miércoles
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Jueves
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Viernes
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Sábado
        </label>
      </div>
      <div className="col-12 text-center">
        <button type="submit" className="btn btn-secondary">
          Continuar
        </button>
      </div>
    </form>
  );
};
