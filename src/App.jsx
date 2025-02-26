import { Routes, Route } from "react-router-dom"; //Para Navegar entre componentes
import { Container, Row, Col } from "react-bootstrap"; //Componentes Bootstrap React

import { React, useState, useEffect } from "react"; //Componentes y estados Iniciales de los componentes.

import Animaciones from "./componentes/Animaciones"; //Animaciones creadas con animate


/*-------------->>>>>>>>>>>>>IMPORTACIÓN DE PRUEBA------------------------->>>>>>>>>>>>>>>>>>>>>>>*/

import Dashboard from "./componentes/Dashboard"; 

/*<<<<<<<<<<<<-------------------IMPORTACIÓN DE PRUEBA.---------------------<<<<<<<<<<<<<<<<<<<<<<*/


/*Importamos todos los componetes que se mostraran inicialmente*/
import PopupInicio from "./componentes/PopupInicio"; // Importa el popup
import NavbarConSubmenus from "./componentes/NavbarConSubmenus";
import Encabezado from "./componentes/Encabezado";
import useScroll from "./hooks/useScroll"; // Hook personalizado para animar el encabezado
import MyCarousel from "./componentes/MyCarousel";
import Tarjetas from "./componentes/Tarjetas";//Sección lo último
import Separador from "./componentes/Separador";//Lineas transversales negro y amarillo
import Footer from "./componentes/Footer";//Pie de página
import BotonGmail from "./componentes/BotonGmail";//Boton Flotante Gmail

/*Componentes que se muestran mediante enlaces*/
import Turismo from "./componentes/Turismo"; // Componente con todo lo realicionado a turismo
import Convocatorias from "./paginas/Convocatorias"; // Componente con todas las convocatorias
import Login from "./componentes/Login";//Control de acceso para datos restringidos.

/*3 Convocatorias de trabajo Recientes*/
import Res001 from "./componentes/recientes/Res001";
import Res002 from "./componentes/recientes/Res002";
import Res003 from "./componentes/recientes/Res003";

/*Convocatorias de trabajo - Convocatorias*/

/*Lineas de tiempo de convocatorias*/

import Tm10 from "./componentes/lineas/Tm010"; //Importamos la Linea de tiempo
import Tm009 from "./componentes/lineas/Tm009"; //Importamos la Linea de tiempo
import Tm008 from "./componentes/lineas/Tm008"; //Importamos la Linea de tiempo

/*Importación de todas las listas de postulantes*/
import Lista10 from "./componentes/lineas/Lista10";//
import Lista009 from "./componentes/lineas/Lista009";
import Lista008 from "./componentes/lineas/Lista008";

/*Resultados*/
import Result010 from "./componentes/resultados/Result010";//

/*Convocatorias de Estudio y Otros*/
import Otros001 from "./componentes/otros/Otros001";


/*Componentes que interacturan con el backend*/
import Usuarios from "./componentes/Usuarios";//Componente que muestra los usuarios de la base de datos.

/*Componentes que se muestran constantemente y rutas*/
function App() {
  const showEncabezado = useScroll(); // Hook para que el encabezado se oculte al hacer scroll

  return (
    <>
    <div>
      <PopupInicio /> {/* Se mostrará automáticamente al cargar la página */}
    </div>
      {/* Navbar y Encabezado se muestran en todas las páginas */}
      <NavbarConSubmenus />
      <Encabezado className={showEncabezado ? "visible" : "hidden"} />

      {/* Definición de las Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/convocatorias" element={<Convocatorias />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tm10" element={<Tm10 />} />
        <Route path="Tm009" element={<Tm009 />} />
        <Route path="Tm008" element={<Tm008 />} />
        <Route path="/Lista10" element={<Lista10 />} />
        <Route path="/Lista009" element={<Lista009 />} />
        <Route path="/Lista008" element={<Lista008 />} />
        <Route path="/Result010" element={<Result010 />} />
        {/* ✅ Nueva ruta para el Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Footer y Botón Gmail en todas las páginas */}
      
      <Footer />
      <BotonGmail />
    </>
  );
}

/*Contiene componentes dinámicos*/
function Home() {
  return (
    <>
      <MyCarousel />
      <Container fluid className="noticias">
        <h2>Lo Último</h2>
      </Container>
      <Separador />

      <Animaciones animationType="fadeInUp">
        <Tarjetas />
      </Animaciones>
      <br />

      <Container fluid className="noticias">
        <h2>Convocatorias de Trabajo Recientes</h2>
      </Container>
      <Separador />
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Animaciones animationType="slideInLeft">
              <Res001 />
            </Animaciones>
          </Col>
          <Col md={4}>
            <Animaciones animationType="zoomIn">
              <Res002 />
            </Animaciones>
          </Col>
          <Col md={4}>
            <Animaciones animationType="slideInRight">
              <Res003 />
            </Animaciones>
          </Col>
        </Row>
      </Container>
      <br />

      <Container fluid className="noticias">
        <h2>Convocatorias de Estudio y  Otros</h2>
      </Container>
      <Separador />
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Animaciones animationType="slideInLeft">
              <Otros001 />
            </Animaciones>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
