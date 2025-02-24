import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Imagen2 from '../../assets/imagenes/noticia001.png?url';

function Otros001() {
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={Imagen2} />
      <Card.Body>
        <Card.Title>Convocatoria SENATI 2025</Card.Title>
        <Card.Text>
          📆 27 de Febrero de 2025. <br />
          ⏱ 4:00 pm. <br />
          ⚠ Inscribete ya!!!
        </Card.Text>
        <Button className="text-center" variant="warning">Ver Mas</Button>
      </Card.Body>
    </Card>
  );
}

export default Otros001;