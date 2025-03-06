import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom

import { Button } from "react-bootstrap";

import Imagen1 from '../assets/imagenes/conv10.png?url';
import Imagen2 from '../assets/imagenes/conv09.png?url';
import Imagen3 from '../assets/imagenes/imagen6.png?url';


/*3 Convocatorias de trabajo Recientes*/
import Docentes001 from "../componentes/recientes/Docentes001";

const Docentes = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">👨‍🏫🧑‍🎓🎒Convocatoria Docente <strong> 2025 👨‍🏫🧑‍🎓🎒</strong></h2>
      <Row>
        <Col md={4}>
          <Docentes001 />
        </Col>
      </Row>
    </Container>
  );
};

export default Docentes;
