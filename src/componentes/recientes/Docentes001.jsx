import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Imagen2 from '../../assets/imagenes/docentes.png?url';

import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom

function Docentes001() {
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={Imagen2} />
      <Card.Body>
        <Card.Title>Convocatoria Docente - 2025</Card.Title>
        <Card.Text>
          ⚙ Inicial - Primaria - Secundaria <br />
          👨‍🏫 Docentes, Auxiliares y Guardianía.<br />
          ⏱️ 10 de marzo de 2025.<br />
        </Card.Text>
        <Button className="text-center" variant="warning" as={Link} to="/Tmdoc">Ver Más</Button>
      </Card.Body>
    </Card>
  );
}

export default Docentes001;