import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom
import "../assets/styles/NavbarStyles.css";

const NavbarConSubmenus = () => {
  const [showServicios, setShowServicios] = useState(false);
  const [showTrabajo, setShowTrabajo] = useState(false);
  const [showCaseríos, setShowCaseríos] = useState(false);
  const [showCostumbres, setShowCostumbres] = useState(false);
  const [showEstudio, setShowEstudio] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  let timeout;

  const handleMouseEnter = (setShow) => {
    clearTimeout(timeout);
    setShow(true);
  };

  const handleMouseLeave = (setShow) => {
    timeout = setTimeout(() => {
      setShow(false);
    }, 10);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchTerm);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Directiva 2025</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">

            {/* ✅ Cambiar Nav.Link por Link */}
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>

            {/* Dropdown Convocatorias */}
            <NavDropdown
              title="Convocatorias"
              id="dropdown-servicios"
              show={showServicios}
              onMouseEnter={() => handleMouseEnter(setShowServicios)}
              onMouseLeave={() => handleMouseLeave(setShowServicios)}
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/Convocatorias">Conv. Trabajo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Docentes">Docentes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/convocatorias/otros">Otros</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/turismo">Turismo</Nav.Link>
            

            {/* Dropdown Caseríos */}
            <NavDropdown
              title="Caseríos"
              id="dropdown-caseríos"
              show={showCaseríos}
              onMouseEnter={() => handleMouseEnter(setShowCaseríos)}
              onMouseLeave={() => handleMouseLeave(setShowCaseríos)}
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/caserios/huarimarcan">Huarimarcan</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/caserios/san-carlos">San Carlos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="usuarios">Contacto</Nav.Link>

            {/* Dropdown Costumbres */}
            <NavDropdown
              title="Costumbres"
              id="dropdown-costumbres"
              show={showCostumbres}
              onMouseEnter={() => handleMouseEnter(setShowCostumbres)}
              onMouseLeave={() => handleMouseLeave(setShowCostumbres)}
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/costumbres/semana-santa">Semana Santa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/costumbres/cruces-de-mayo">Cruces de Mayo</NavDropdown.Item>
            </NavDropdown>

          </Nav>

          {/* 🔍 Formulario de búsqueda */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light" type="submit">Buscar</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarConSubmenus;
