import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom

import { Button } from "react-bootstrap";

import Imagen1 from '../assets/imagenes/conv10.png?url';
import Imagen2 from '../assets/imagenes/conv09.png?url';
import Imagen3 from '../assets/imagenes/imagen6.png?url';


/*3 Convocatorias de trabajo Recientes*/
import Res001 from "../componentes/recientes/Res001";
import Res002 from "../componentes/recientes/Res002";
import Res003 from "../componentes/recientes/Res003";

/*Todas las convocatorias */
import Conv006 from "../componentes/recientes/Conv006";


const Convocatorias2 = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🌍 Convocatorias Compañía Minera <strong>Chungar SAC - 2025 🌍</strong></h2>
      <Row>
        <Col md={4}>
          <Res001 />
        </Col>
        <Col md={4}>
          <Res002 />
        </Col>
        <Col md={4}>
          <Res003 />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={4}>
          <Conv006 />
        </Col>
      </Row>
    </Container>
  );
};

export default Convocatorias2;
