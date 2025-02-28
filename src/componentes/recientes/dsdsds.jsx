import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Imagen2 from '../../assets/imagenes/Imagen-Card_006.png?url';

import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom

function Conv006() {
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={Imagen2} />
      <Card.Body>
        <Card.Title>Convocatoria de Trabajo N° 006</Card.Title>
        <Card.Text>
          ⚙ AESA - Compañía Minera Chungar SAC <br />
          👷 01 AYDANTE DE OPERACIONES MINA.<br />
          📆 12 de febrero de 2025.<br />
        </Card.Text>
        <Button className="text-center" variant="warning" as={Link} to="/Tm006">Ver Más</Button>
      </Card.Body>
    </Card>
  );
}

export default Conv006;