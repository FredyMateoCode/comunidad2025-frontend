import { Container, Row, Col } from "react-bootstrap";
import { BiHome, BiBriefcase, BiPhone } from "react-icons/bi"; // Importamos los iconos
import { FaFacebook, FaYoutube, FaWhatsapp  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Sección de información */}
          <Col md={4} className="text-center text-md-start">
            <h5>Comunidad Campesina de Huayllay</h5>
            <p>Construyendo el futuro con tecnología y conocimiento.</p>
          </Col>

          {/* Sección de enlaces */}
          <Col md={4} className="text-center">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Inicio</a></li>
              <li><a href="#" className="text-light">Convocatorias</a></li>
              <li><a href="#" className="text-light">Contacto</a></li>
            </ul>
          </Col>

          {/* Redes Sociales */}
          <Col md={4} className="text-center text-md-end">
            <h5>Síguenos</h5>
            <a href="#" className="text-light me-3">
              <i className="fab fa-facebook fa-lg"></i>
              <FaFacebook size={20} className="me-2" />
              Facebook<br />
            </a>
            <a href="#" className="text-light me-3">
              <i className="fab fa-twitter fa-lg"></i>
              <FaYoutube size={20} className="me-2" />
              Youtube<br />
            </a>
            <a href="#" className="text-light">
              <i className="fab fa-instagram fa-lg"></i>
              <FaWhatsapp size={20} className="me-2" />
              931-538-961
            </a>
          </Col>
        </Row>

        {/* Derechos reservados */}
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; Desarrollado por <strong>Fredy Mateo.</strong> Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
