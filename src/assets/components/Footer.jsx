// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { BsTruck } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { CiLock } from "react-icons/ci";

const Footer = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <a className="navbar-brand btn btn-light" href="#">🔝</a>
      </div>

      <div className="container">
        <div className="row justify-content-center" style={{ marginTop: "10px" }}>

          <div className="col-6 text-start" style={{ maxWidth: "300px" }}>
            <p>CONTACTANOS</p>
            <a
              href="https://www.instagram.com/tu_nombre_de_instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-small"
              style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'inherit' }}
            >
              <FaInstagram size={18} className="me-2" />@berry__chill
            </a>
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex  text-small"
              style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'inherit' }}
            >
              <FaWhatsapp size={18} className="me-2" />
              +549 3464 443683
            </a>
            <a
              href="mailto:berrychillcasilda@gmail.com"
              className="d-flex align-items-center text-small"
              style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'inherit' }}
            >
              <FcGoogle size={18} className="me-2" />
              berr...@gmail.com
            </a>
          </div>


          <div className="col-6 text-end" style={{ maxWidth: "300px" }}>
            <p>CONOCÉ MÁS</p>
            <Link
              to="/aboutus"
              className="d-flex justify-content-end text-small"
              style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'inherit' }}
            >
              <span className="me-2">Quiénes somos</span>
            </Link>
            <Link
              to="/ruta-a-completar-despues"
              className="d-flex justify-content-end text-small"
              style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'inherit' }}
            >
              <span className="me-2">Unite a la Feria Saludable</span>
            </Link>
          </div>
        </div>

        {/* Div debajo ocupando todo el ancho con tres textos */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex flex-column align-items-start">
              <p className="mb-2 d-flex align-items-center text-start" style={{
                fontSize: '0.875rem'
              }}>
                <i className="bi bi-truck"><BsTruck size={18} className="me-2" /></i>
                <span className="ms-2">Envío gratis</span>
              </p>
              <p className="mb-2 d-flex align-items-center text-start" style={{
                fontSize: '0.875rem'
              }}>
                <i className="bi bi-phone"><BiMessage size={18} className="me-2" /></i>
                <span className="ms-2">Dentro de las 24 horas un vendedor se comunicará con vos para coordinar la entrega</span>
              </p>
              <p className="d-flex align-items-center text-start" style={{
                fontSize: '0.875rem'
              }}>
                <i className="bi bi-shield-lock"><CiLock size={18} className="me-2" /></i>
                <span className="ms-2">Comprá con tranquilidad. Sitio seguro.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Footer
