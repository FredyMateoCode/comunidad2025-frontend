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

import Timeline from "./componentes/Timeline"; //Importamos Timeline

import Turismo from "./componentes/Turismo"; // Importamos Turismo


import Convocatorias2 from "./paginas/Convocatorias2"; // Importamos Convocatorias2

import useScroll from "./hooks/useScroll"; // Hook personalizado

import Card002 from "./componentes/Card002";
import Card003 from "./componentes/Card003";
import Card004 from "./componentes/Card004";
import Card005 from "./componentes/Card005";

function Home() {
  return (
    <>
      <MyCarousel />
      <Container fluid className="noticias">
        <h2>Lo Último</h2>
      </Container>
      <Convocatorias />
      <Animaciones animationType="fadeInUp">
             <Tarjetas />
      </Animaciones>
      
      <br />

      <Container fluid className="noticias">
        <h2>Convocatorias de Trabajo</h2>
      </Container>
      <Convocatorias />
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Animaciones animationType="slideInLeft">
              <Card003 />
            </Animaciones>
          </Col>
          <Col md={4}>
            <Animaciones animationType="zoomIn">
              <Card004 />
            </Animaciones>
          </Col>
          <Col md={4}>
            <Animaciones animationType="slideInRight">
              <Card005 />
            </Animaciones>
          </Col>
        </Row>
      </Container>
      <br />

      <Container fluid className="noticias">
        <h2>Convocatorias de Estudio</h2>
      </Container>
      <Convocatorias />
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Animaciones animationType="slideInLeft">
              <Card002 />
            </Animaciones>
          </Col>
        </Row>
      </Container>
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
        <Route path="Timeline" element={<Timeline />} />
      </Routes>

      {/* Footer y Botón Gmail en todas las páginas */}
      

      <Footer />
      <BotonGmail />
    </>
  );
}

export default App;
