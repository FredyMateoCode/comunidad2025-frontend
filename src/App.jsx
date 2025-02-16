import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { useState, useEffect } from "react";

import Encabezado from "./componentes/Encabezado";
import NavbarConSubmenus from "./componentes/NavbarConSubmenus";
import Usuarios from "./componentes/Usuarios";
import Tarjetas from "./componentes/Tarjetas";
import Card001 from "./componentes/Card001";
import Animaciones from "./componentes/Animaciones";
import Convocatorias from "./componentes/Convocatorias";
import Footer from "./componentes/Footer";
import BotonGmail from "./componentes/BotonGmail";
import MyCarousel from "./componentes/MyCarousel";
import Turismo from "./componentes/Turismo"; // Importamos Turismo
import Convocatorias2 from "./paginas/Convocatorias2"; // Importamos Turismo

import useScroll from "./hooks/useScroll"; // Hook personalizado

function Home() {
  return (
    <>
      <MyCarousel />
      <Container fluid className="noticias">
        <h2>Lo Último</h2>
      </Container>
      <Convocatorias />
      <Tarjetas />
      <br />

      <Container fluid className="noticias">
        <h2>Convocatorias de Trabajo</h2>
      </Container>
      <Convocatorias />
      <Container className="mt-5 text-center">
        <Row>
          <Col md={4}>
            <Animaciones animationType="slideInLeft">
              <Card001 />
            </Animaciones>
          </Col>
          <Col md={4}>
            <Animaciones animationType="zoomIn">
              <Card001 />
            </Animaciones>
          </Col>
          <Col md={4}>
            <Animaciones animationType="slideInRight">
              <Card001 />
            </Animaciones>
          </Col>
        </Row>
      </Container>
      <br />

      <Container fluid className="noticias">
        <h2>Convocatorias de Estudio</h2>
      </Container>
      <Convocatorias />
      <Container className="mt-5 text-center">
        <Row>
          <Col md={4}>
            <Animaciones animationType="slideInLeft">
              <Card001 />
            </Animaciones>
          </Col>
          <Col md={4}>
            <Animaciones animationType="zoomIn">
              <Card001 />
            </Animaciones>
          </Col>
          <Col md={4}>
            <Animaciones animationType="slideInRight">
              <Card001 />
            </Animaciones>
          </Col>
        </Row>
      </Container>

      <div className="container mt-4">
        <h4>Mostrando datos de Prueba - Comunidad 2025 Desde Aiven</h4>
        <p>Página en construcción...</p>
        <Usuarios />
      </div>
    </>
  );
}

function App() {
  const showEncabezado = useScroll(); // Hook para el encabezado

  return (
    <>
      {/* Navbar y Encabezado se muestran en todas las páginas */}
      <NavbarConSubmenus />
      <Encabezado className={showEncabezado ? "visible" : "hidden"} />

      {/* Definimos las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/convocatorias" element={<Convocatorias />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/tarjetas" element={<Tarjetas />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/convocatorias2" element={<Convocatorias2 />} />
      </Routes>

      {/* Footer y Botón Gmail en todas las páginas */}
      <Footer />
      <BotonGmail />
    </>
  );
}

export default App;
