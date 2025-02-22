import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom

import { Button } from "react-bootstrap";

import Imagen1 from '../assets/imagenes/conv10.png?url';
import Imagen2 from '../assets/imagenes/conv09.png?url';
import Imagen3 from '../assets/imagenes/imagen6.png?url';


const Convocatorias2 = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🌍 Convocatorias Compañía Minera <strong>Chungar SAC - 2025 🌍</strong></h2>
      <Row>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen1} />
            <Card.Body>
              <Card.Title>Convocatoria N° 010</Card.Title>
              <Card.Text>
                ⚙ AESA - Compañía Minera Chungar SAC <br />
                👷 FACILITADOR DE OPERACIONES.<br />
                📆 21 de febrero de 2025.<br />
                ⏱ 3:30 p.m.<br />
                📬 comunidadcampesinahuayllay@gmail.com
                <div className = "text-center">
                  <Button  variant="warning" as={Link} to="/Timeline">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen2} />
            <Card.Body>
              <Card.Title>Convocatoria N° 009</Card.Title>
              <Card.Text>
                ⚙ AESA - Compañía Minera Chungar SAC <br />
                👷 FACILITADOR DE OPERACIONES.<br />
                📆 20 de febrero de 2025.<br />
                ⏱ 3:30 p.m.<br />
                📬 comunidadcampesinahuayllay@gmail.com
                <div className = "text-center">
                  <Button  variant="warning" as={Link} to="/Timeline">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen1} />
            <Card.Body>
              <Card.Title>Convocatoria 008</Card.Title>
              <Card.Text>
                Relájate en nuestras cascadas y disfruta de la frescura de la naturaleza.
                <div className = "text-center">
                  <Button  variant="warning" as={Link} to="/Timeline">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen1} />
            <Card.Body>
              <Card.Title>Convocatoria 007</Card.Title>
              <Card.Text>
                Relájate en nuestras cascadas y disfruta de la frescura de la naturaleza.
                <div className = "text-center">
                  <Button  variant="warning" as={Link} to="/Timeline">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen2} />
            <Card.Body>
              <Card.Title>Convocatoria 006</Card.Title>
              <Card.Text>
                Disfruta de paisajes impresionantes y rutas de senderismo únicas.
                <div className = "text-center">
                  <Button  variant="warning">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen3} />
            <Card.Body>
              <Card.Title>Convocatoria 005</Card.Title>
              <Card.Text>
                Vive nuestras festividades llenas de color, danzas y gastronomía tradicional.
                <div className = "text-center">
                  <Button  variant="warning">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen2} />
            <Card.Body>
              <Card.Title>Convocatoria 004</Card.Title>
              <Card.Text>
                Relájate en nuestras cascadas y disfruta de la frescura de la naturaleza.
                <div className = "text-center">
                  <Button  variant="warning">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen2} />
            <Card.Body>
              <Card.Title>Convocatoria 003</Card.Title>
              <Card.Text>
                Disfruta de paisajes impresionantes y rutas de senderismo únicas.
                <div className = "text-center">
                  <Button  variant="warning">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen3} />
            <Card.Body>
              <Card.Title>Convocatoria 002</Card.Title>
              <Card.Text>
                Vive nuestras festividades llenas de color, danzas y gastronomía tradicional.
                <div className = "text-center">
                  <Button  variant="warning">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={Imagen2} />
            <Card.Body>
              <Card.Title>Convocatoria 001</Card.Title>
              <Card.Text>
                Relájate en nuestras cascadas y disfruta de la frescura de la naturaleza.
                <div className = "text-center">
                  <Button  variant="warning">Ver Más</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Convocatorias2;
