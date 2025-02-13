import { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function Navbar() {
  const [activeLink, setActiveLink] = useState("inicio");

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="#">CCH - 2025</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link 
              href="#" 
              className={activeLink === "inicio" ? "fw-bold text-white" : "text-secondary"}
              onClick={() => setActiveLink("inicio")}
            >
              Inicio
            </Nav.Link>

            <Nav.Link 
              href="#" 
              className={activeLink === "acerca" ? "fw-bold text-white" : "text-secondary"}
              onClick={() => setActiveLink("acerca")}
            >
              Directiva
            </Nav.Link>

            <Nav.Link 
              href="#" 
              className={activeLink === "otros" ? "fw-bold text-white" : "text-secondary"}
              onClick={() => setActiveLink("otros")}
            >
              Caseríos
            </Nav.Link>

            {/* 🔹 Menú "Convocatorias" con fondo negro */}
            <NavDropdown 
              title="Convocatorias" 
              id="basic-nav-dropdown"
              className="text-white"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#" className="dropdown-item-custom">Huayllay</NavDropdown.Item>

              {/* 🔹 Submenú lateral con los mismos estilos */}
              <NavDropdown drop="end" title="Configuración" className="text-white dropdown-item-custom">
                <NavDropdown.Item href="#" className="dropdown-item-custom">Opciones</NavDropdown.Item>
                <NavDropdown.Item href="#" className="dropdown-item-custom">Opciones</NavDropdown.Item>
                <NavDropdown.Item href="#" className="dropdown-item-custom">Opciones</NavDropdown.Item>
                <NavDropdown.Item href="#" className="dropdown-item-custom">Opciones</NavDropdown.Item>
                <NavDropdown.Item href="#" className="dropdown-item-custom">Opciones y Opciones</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#" className="dropdown-item-custom">Opciones</NavDropdown.Item>
              <NavDropdown.Item href="#" className="dropdown-item-custom">Opciones</NavDropdown.Item>
              <NavDropdown.Item href="#" className="dropdown-item-custom">Opciones</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="dropdown-item-custom">Opciones</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* 🔹 Buscador */}
          <Form className="d-flex">
            <FormControl type="search" placeholder="Buscar..." className="me-2" />
            <Button variant="outline-light">Buscar</Button>
          </Form>

          {/* 🔹 Botón de Inicio de Sesión */}
          <Button variant="dark" className="ms-3">Iniciar Sesión</Button>

        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
