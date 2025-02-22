import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import Imagen1 from '../assets/imagenes/imagen1.jpg';
import Imagen2 from '../assets/imagenes/imagen2.jpg';
import Imagen3 from '../assets/imagenes/imagen3.jpg';


const Turismo = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🌍 Turismo en Nuestra Comunidad</h2>
      <Row>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen1} />
            <Card.Body>
              <Card.Title>Montañas Mágicas</Card.Title>
              <Card.Text>
                Disfruta de paisajes impresionantes y rutas de senderismo únicas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen1} />
            <Card.Body>
              <Card.Title>Fiestas y Costumbres</Card.Title>
              <Card.Text>
                Vive nuestras festividades llenas de color, danzas y gastronomía tradicional.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen1} />
            <Card.Body>
              <Card.Title>Cascadas y Ríos</Card.Title>
              <Card.Text>
                Relájate en nuestras cascadas y disfruta de la frescura de la naturaleza.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Turismo;
