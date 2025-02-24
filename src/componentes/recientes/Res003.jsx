import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Imagen2 from '../../assets/imagenes/img_card009.png?url';

import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom

function Res003() {
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={Imagen2} />
      <Card.Body>
        <Card.Title>Convocatoria de Trabajo N° 008</Card.Title>
        <Card.Text>
          ⚙ ROBOCON - Compañía Minera Chungar SAC <br />
          👷 01 OPERADOR DE MIXER.<br />
          👷 03 AYUDANTES DE ROBOT.<br />
          📆 19 de febrero de 2025.<br />
        </Card.Text>
        <Button className="text-center" variant="warning" as={Link} to="/Tm008">Ver Más</Button>
      </Card.Body>
    </Card>
  );
}

export default Res003;