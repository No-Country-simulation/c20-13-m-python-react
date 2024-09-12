import React from "react";
import { BiMessage } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const MarketFooter = () => {
  return (
    <>
      <nav
        className="navbar vw-100"
        style={{ background: "rgba(117, 224, 146, 0.50)" }}
      >
        <div className="container">
          <div className="row vw-100">
            <div className="col">
              <h6 className="text-start">CONTACTANOS</h6>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex text-center"
                style={{
                  fontSize: "10px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <FaWhatsapp size={18} className="me-2" />
                +549 3464 443683
              </a>
              <a
                href="https://www.instagram.com/tu_nombre_de_instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex"
                style={{
                  fontSize: "10px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <FaInstagram size={18} className="me-2" />
                @vitalGreens
              </a>

              <a
                href="mailto:vitalGreens@gmail.com"
                className="d-flex"
                style={{
                  fontSize: "10px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <FcGoogle size={18} className="me-2" />
                vitalGreens@gmail.com
              </a>
            </div>
            <div className="col">
              <h6 className="">CONOCÉ MÁS</h6>
              <Link
                to="/aboutus"
                style={{
                  fontSize: "10px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <p
                  className="me-2"
                  style={{
                    fontSize: "10px",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  Quiénes somos?
                </p>
              </Link>
              <p
                style={{
                  fontSize: "10px",
                  textDecoration: "none",
                  color: "inherit",
                }}
                className="me-2 "
              >
                Unite a la feria saludable
              </p>
            </div>
            <div className="col-sm-5">
              <br />
              <p
                className="mb-1 text-start"
                style={{
                  fontSize: "10px",
                }}
              >
                <i className="bi bi-phone">
                  <BiMessage size={18} className="me-2" />
                </i>
                <span className="ms-2">
                  Dentro 24 horas un vendedor se comunicará con vos para
                  coordinar la entrega
                </span>
              </p>
              <p
                className="text-start"
                style={{
                  fontSize: "10px",
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
        </div>
      </nav>
    </>
  );
};
