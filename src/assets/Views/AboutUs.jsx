import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import imgMuestra from '/src/assets/img/imgMuestraB&W.jpg';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="text-start  text-dark">
          <p className="fw-bold pt-4 pb-2">Quiénes Somos</p>
          <p>¡Bienvenidos a Berry Chill!, nos dedicamos a ofrecer una selección inigualable de frutos rojos, provenientes de la región más destacada en la cosecha de estos productos en Argentina: <strong>Coronda, Santa Fe.</strong></p>

          <p>¿Y qué tiene de especial este rincón del país? <strong>Santa Fe no solo es la cuna de la excelencia en producción agrícola,</strong> sino también el lugar que vio nacer a talentos que trascendieron fronteras, como Lionel Messi; Fito Páez, ícono del rock nacional; Roberto Fontanarrosa, maestro del humor y la narrativa; Luciana Aymar, la mejor jugadora de hockey sobre césped; Gilda, una leyenda de la música tropical; entre muchos más… <strong>Como ellos, queremos dar lo mejor de nosotros, con pasión y calidad en cada producto que llega a tu mesa en Casilda.</strong></p>

          <p><strong>En Berry Chill, creemos en la calidad por encima de todo. Nuestros frutos rojos se cultivan en Coronda, un lugar privilegiado dentro de la provincia de Santa Fe,</strong> conocido por sus condiciones ideales para el cultivo de frutas como frutillas, arándanos, y frambuesas. Coronda ha ganado fama por sus prácticas agrícolas y su terreno fértil, que brindan un sabor único y una frescura incomparable a nuestros productos.</p>

          <p><strong>Nos enorgullece ofrecer a nuestros clientes, tanto a mayorista como minorista,</strong> frutos rojos que cumplen con los más altos estándares de calidad. Nuestro compromiso es asegurar que cada fruta que llega a vos sea tan deliciosa y fresca como el día en que fue cosechada. Trabajamos directamente con los productores locales para garantizar una cadena de suministro eficiente y transparente, brindándote lo mejor de nuestra región.</p>

          <p>Además, somos soñadores. <strong>Queremos que nuestra empresa no solo se dedique a vender, sino que también sea el inicio de una comunidad saludable en la ciudad.</strong> Nos esforzamos por ser un catalizador para el crecimiento de una red de apoyo y bienestar, promoviendo un estilo de vida más consciente y colaborativo.</p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <Button variant="light" style={{ width: '50%', fontSize: '1rem' }}>Unite a la Feria</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="p-0">
          <img
            src={imgMuestra}
            alt="Imagen descriptiva"
            style={{ width: '100%', height: '50vw', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs