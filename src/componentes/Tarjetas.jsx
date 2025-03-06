import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

import Imagen1 from '../assets/imagenes/docentes.png?url';
import Imagen2 from '../assets/imagenes/imagen5.png?url';
import Imagen3 from '../assets/imagenes/imagen6.png?url';

import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom


function Tarjetas() {
  return (
    <CardGroup>
      <Card className = "shadow">
        <Card.Img variant="top" src={Imagen1} />
        <Card.Body>
          <Card.Title className = "text-center">Convocatoria Docente - 2025 Inicical - Primaria - Secundaria</Card.Title>
          <h3>Docentes - Auxiliares - Guardianía</h3>
          <Card.Text className = "text-left">
            ⚠ Inscripciones hasta: <br />
            📆 10 de Marzo de 2025. <br />
            ⏱ 12:00 m. <br />
          </Card.Text>
        </Card.Body>
        <Card.Footer className = "text-center">
          <Button className="text-center" variant="warning" as={Link} to="/Tmdoc">Ver Detalles</Button>
          <br />
          <small className="text-muted">05 de marzo de 2025 </small>
        </Card.Footer>
      </Card>
      <Card className = "shadow">
        <Card.Img variant="top" src={Imagen2} />
        <Card.Body>
          <Card.Title className = "text-center">Conoce Nuestros Recursos Turísticos y Nuestras Costumbres</Card.Title>
          <Card.Text className = "text-left">
            📆 Fechas de feestividades. <br />
            📝 Historias. <br />
            🗺 Rutas.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="warning">Ver Mas</Button>
          <br />
          <small className="text-muted">19 de Febrero de 2025</small>
        </Card.Footer>
      </Card>
      <Card className = "shadow">
        <Card.Img variant="top" src={Imagen3} />
        <Card.Body>
          <Card.Title className="text-center">Enterárate de Nuesras Convocatorias</Card.Title>
          <Card.Text className = "text-left">
            📆 Plazos de Postulación. <br />
            ⏱ Horarios de presentación de documentos.<br />
            📌 Resultados.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="warning">Ver Mas</Button>
          <br />
          <small className="text-muted">25 de febrero de 2025</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Tarjetas;