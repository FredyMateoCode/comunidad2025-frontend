import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import Imagen2 from '../assets/imagenes/docentes.png?url';

import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom

const PopupInicio = () => {
  const [show, setShow] = useState(false);

  // Mostrar el modal automáticamente al cargar la página
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Bienvenido.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Convocatoria Docente</strong>, Para ver los detalles, ingrese al menú <strong>*Convocatorias</strong> y a continuación en <strong>*Docentes.</strong> <br />
        <Card.Img variant="top" src={Imagen2} />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="text-center" variant="primary" as={Link} to="/Tmdoc" onClick={() => setShow(false)}>Ver Detalles</Button>
        <Button variant="warning" onClick={() => setShow(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupInicio;
