// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <a className="navbar-brand btn btn-light" href="#">🔝</a>
      </div>
      <div className="container justify-content-center">
        <div className="row justify-content-center" style={{ gap: "70px", marginTop: "10px" }}>
          <div className="col-12 col-md-auto" style={{ maxWidth: "300px" }}>

            <p>Texto columna izquierda</p>
            <p>Otro texto columna izquierda</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum aliquid quas dolorum earum, odit in tempore! Ducimus, aliquid. Facilis, voluptates. Accusamus fugiat maiores dicta sapiente, repudiandae dolores omnis hic!</p>
          </div>
          <div className="col-12 col-md-auto mt-4 mt-md-0 ms-md-4" style={{ maxWidth: "300px" }}>

            <p>Texto columna derecha</p>
            <p>Otro texto columna derecha</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum aliquid quas dolorum earum, odit in tempore! Ducimus, aliquid. Facilis, voluptates. Accusamus fugiat maiores dicta sapiente, repudiandae dolores omnis hic!</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Footer
