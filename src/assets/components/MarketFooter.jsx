import React from "react";
import { BiMessage } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const MarketFooter = () => {
  return (
    <>
      <nav
        className="navbar"
        style={{ background: "rgba(117, 224, 146, 0.50)" }}
      >
        <div className="d-flex flex-column justify-content-between align-items-center vw-100">
          <div className="row">
            <div className="col-6">
              <h5>CONTACTANOS</h5>
              <a
                href="https://www.instagram.com/tu_nombre_de_instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center text-small"
                style={{
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <FaInstagram size={18} className="me-2" />
                @berry__chill
              </a>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex  text-small"
                style={{
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <FaWhatsapp size={18} className="me-2" />
                +549 3464 443683
              </a>
              <a
                href="mailto:berrychillcasilda@gmail.com"
                className="d-flex align-items-center text-small"
                style={{
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <FcGoogle size={18} className="me-2" />
                berr...@gmail.com
              </a>
            </div>
            <div className="col-6">
              <h5>CONOCÉ MÁS</h5>
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
              <p className="me-2">Unite a la feria saludable</p>
            </div>
          </div>
          <div className="container">
            <p
              className="mb-1 text-start"
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
              className="text-start"
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
