import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import Imagen2 from '../assets/imagenes/noticia001.png?url';

const PopupInicio = () => {
  const [show, setShow] = useState(false);

  // Mostrar el modal automáticamente al cargar la página
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Bienvenido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Página en Desarrollo</strong>, por lo que al interactuar con algunos componentes como (enlaces, botones y otros) 
        puede no obtener resultados <br />
        <Card.Img variant="top" src={Imagen2} />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => setShow(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupInicio;
