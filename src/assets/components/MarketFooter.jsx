import React from "react";
import { BiMessage } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

export const MarketFooter = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="flex-column justify-content-center align-items-center vw-100">
          <p>CONOCÉ MÁS</p>
          <Link
            to="/aboutus"
            style={{
              fontSize: "0.875rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <p className="me-2">Quiénes somos?</p>
          </Link>
          <div className="container-fluid mt-2">
            <p
              className="mb-1"
              style={{
                fontSize: "0.875rem",
              }}
            >
              <i className="bi bi-truck">
                <BsTruck size={18} className="me-2" />
              </i>
              <span className="ms-2">Envío gratis</span>
            </p>
            <p
              className="mb-1"
              style={{
                fontSize: "0.875rem",
              }}
            >
              <i className="bi bi-phone">
                <BiMessage size={18} className="me-2" />
              </i>
              <span className="ms-2">
                Dentro 24 horas un vendedor se comunicará con vos para coordinar
                la entrega
              </span>
            </p>
            <p
              style={{
                fontSize: "0.875rem",
              }}
            >
              <i className="bi bi-shield-lock">
                <CiLock size={18} className="me-2" />
              </i>
              <span className="ms-2">
                Comprá con tranquilidad. Sitio seguro.
              </span>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};
