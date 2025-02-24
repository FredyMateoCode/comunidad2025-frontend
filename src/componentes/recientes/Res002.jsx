import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Imagen2 from '../../assets/imagenes/conv09.png?url';

import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom

function Card003() {
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={Imagen2} />
      <Card.Body>
        <Card.Title>Convocatoria de Trabajo N° 009</Card.Title>
        <Card.Text>
          ⚙ AESA - Compañía Minera Chungar SAC <br />
          👷 <strong>OPERADOR DE SCOOP II.</strong><br />
          📆 20 de febrero de 2025.<br />
          ⏱ 3:30 p.m.<br />
        </Card.Text>
        <Button className="text-center" variant="warning" as={Link} to="/Tm009">Ver Más</Button>
      </Card.Body>
    </Card>
  );
}

export default Card003;