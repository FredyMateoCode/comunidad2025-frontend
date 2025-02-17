import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

import Imagen1 from '../assets/imagenes/imagen1.jpg?url';
import Imagen2 from '../assets/imagenes/imagen2.jpg?url';
import Imagen3 from '../assets/imagenes/imagen3.jpg?url';


function Tarjetas() {
  return (
    <CardGroup>
      <Card className = "shadow text-center">
        <Card.Img variant="top" src={Imagen1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="warning">Ver Mas</Button>
          <br />
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className = "shadow text-center">
        <Card.Img variant="top" src={Imagen2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="warning">Ver Mas</Button>
          <br />
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className = "shadow text-center">
        <Card.Img variant="top" src={Imagen3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
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