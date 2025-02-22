import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

import Imagen1 from '../assets/imagenes/noticia001.png?url';
import Imagen2 from '../assets/imagenes/imagen5.png?url';
import Imagen3 from '../assets/imagenes/imagen6.png?url';


function Tarjetas() {
  return (
    <CardGroup>
      <Card className = "shadow">
        <Card.Img variant="top" src={Imagen1} />
        <Card.Body>
          <Card.Title className = "text-center">Convocatoria SENATI 2025</Card.Title>
          <Card.Text className = "text-left">
            📆 27 de Febrero de 2025. <br />
            ⏱ 4:00 pm. <br />
            ⚠ Inscribete ya!!!
          </Card.Text>
        </Card.Body>
        <Card.Footer className = "text-center">
          <Button variant="warning">Ver Más</Button>
          <br />
          <small className="text-muted">19 de febrero de 2025 </small>
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
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Tarjetas;