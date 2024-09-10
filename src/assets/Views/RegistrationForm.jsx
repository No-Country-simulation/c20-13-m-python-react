import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from 'react-icons/fa';
import line from '../img/line.svg'
import circle from '../img/circle.svg'


const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <style>{`
      .custom-form .form-control {
      border: 1px solid black;
      border-radius: 4px;
      padding: 1rem 0.75rem 0.25rem 0.75rem;
      position: relative;
      box-shadow: none; 
      outline: none;   
    }


    .custom-label {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      padding: 0 0.25rem;
      background-color: white; 
      transition: 0.2s;
      pointer-events: none;
    }

    .form-control:focus ~ .custom-label,
    .form-control:not(:placeholder-shown) ~ .custom-label {
      top: -0.6rem;
      left: 0.6rem;
      font-size: 0.75rem;
      color: black;
    }

    .btn-primary {
     border-radius: 100px;
background: #A44694;
width: 136px;
height: 40px;

/* M3/Elevation Light/1 */
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    }

    .btn-primary:hover {
      background-color: black; 
      color: white;           
    }

     .eye-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
  `}</style>
      <Container>
        <p className="text-center fw-bold fs-3 my-4">Iniciar sesión</p>
        <form className="custom-form">
          <div className="mb-3 position-relative">
            <input type="email" className="form-control" id="email" placeholder=" " />
            <label htmlFor="email" className="custom-label">E-mail*</label>
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}  // Cambiar entre "password" y "text"
              className="form-control"
              id="password"
              placeholder=" "
            />
            <label htmlFor="password" className="custom-label">Contraseña</label>

            {/* Ícono del ojo, cambia al hacer clic */}
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {/* <div className="mb-3 position-relative">
            <input type="password" className="form-control" id="password" placeholder=" " />
            <label htmlFor="password" className="custom-label">Contraseña</label>
          </div> */}
          {/* <button variant="light" type="submit" className="btn btn-primary">Submit</button> */}
          <Row className="mt-3">
            <Col className="d-flex justify-content-center">
              <Button variant="light" type="submit" className="btn-primary my-3" >Ingresar</Button>
            </Col>
          </Row>
        </form>
        <div>
          <img src={line} alt="" style={{ width: "48px" }} />
          <img src={circle} alt="" className="mx-2" style={{ width: "12px" }} />
          <img src={line} alt="" style={{ width: "48px" }} />
        </div>
        <p className="text-center  fs-5 my-4">¿No tienes cuenta?</p>
        <p className="text-center fw-bold fs-3 my-4">Registrarse</p>
        <form className="custom-form">
          <div className="mb-3 position-relative">
            <input type="email" className="form-control" id="emailReg" placeholder=" " />
            <label htmlFor="emailReg" className="custom-label">E-mail*</label>
          </div>
          <div className="mb-3 position-relative">
            <input type="number" className="form-control" id="phone" placeholder=" " />
            <label htmlFor="phone" className="custom-label">Teléfono*</label>
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="passwordReg"
              placeholder=" "
            />
            <label htmlFor="passwordReg" className="custom-label">Contraseña</label>

            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="passwordRepeatReg"
              placeholder=" "
            />
            <label htmlFor="passwordRepeatReg" className="custom-label">Repetir contraseña</label>

            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <Row className="mt-3">
            <Col className="d-flex justify-content-center">
              <Button type="submit" className="bg-white my-3" style={{ color: '#000', boxShadow: '#000', border: 'none' }} >Registrarse</Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex flex-column align-items-center">
              <Button variant="light" type="submit" style={{
                width: '263px',
                height: '48px',
                borderRadius: '100px',
                backgroundColor: 'white',
                boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                border: '1px solid #d1d5db',
                color: '#1f2937',
                margin: '0.75rem 0',
                outline: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}><FaGoogle style={{ marginRight: '8px' }} /> Ingresar con Google</Button>
              <Button variant="light" type="submit" style={{
                width: '263px',
                height: '48px',
                borderRadius: '100px',
                backgroundColor: 'white',
                boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                border: '1px solid #d1d5db',
                color: '#1f2937',
                margin: '0.75rem 0',
                outline: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                marginBottom: '70px',
              }} > <FaFacebookF style={{ marginRight: '8px' }} /> Ingresar con Facebook</Button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  )
}

export default RegistrationForm