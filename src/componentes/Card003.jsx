import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Imagen2 from '../assets/imagenes/conv10.png?url';

function Card003() {
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={Imagen2} />
      <Card.Body>
        <Card.Title>Convocatoria de Trabajo N° 010</Card.Title>
        <Card.Text>
          ⚙ AESA - Compañía Minera Chungar SAC <br />
          👷 <strong>FACILITADOR DE OPERACIONES.</strong><br />
          📆 21 de febrero de 2025.<br />
          ⏱ 3:30 p.m.<br />
        </Card.Text>
        <Button className="text-center" variant="warning">Ver Mas</Button>
      </Card.Body>
    </Card>
  );
}

export default Card003;