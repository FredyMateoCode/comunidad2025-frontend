import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importa el Carousel de React Bootstrap
import Imagen1 from '../assets/imagenes/imagen1.jpg?url';
import Imagen2 from '../assets/imagenes/imagen2.jpg?url';
import Imagen3 from '../assets/imagenes/imagen3.jpg?url';
import Imagen4 from '../assets/imagenes/imagen4.png?url';
import Imagen5 from '../assets/imagenes/imagen5.png?url';
import Imagen6 from '../assets/imagenes/imagen6.png?url';

import Animaciones from "../componentes/Animaciones";

import "../assets/styles/CarouselStyles.css";

const MyCarousel = () => { // Cambia el nombre del componente
  return (
    <Carousel> {/* Usa el Carousel de React Bootstrap */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen4}
          alt="First slide"
        />
        <Carousel.Caption>
        <Animaciones animationType="slideInRight">
        <h3>Comunidad Campesina de Huayllay</h3>
        </Animaciones>

        <Animaciones animationType="slideInLeft">
        <p>Comprometidos con la tranasparencia, para el desarrollo comunal</p>
        </Animaciones>          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <Animaciones animationType="slideInRight">
            <h3>DIRECTIVA 2025</h3>
          </Animaciones>
          <Animaciones animationType="slideInLeft">
            <p>Ing. Marco Antonio BORJA GALVAN<br />
            <strong>PRESIDENTE</strong>
            </p>
          </Animaciones>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Animaciones animationType="slideInRight">
            <h3>CONSULTE RECURSOS TURÍSTICOS</h3>
          </Animaciones>
          <Animaciones animationType="slideInLeft">
            <p>Información turística y toda la riquesa cultural de nuestro distrito de Huayllay.</p>
          </Animaciones>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Animaciones animationType="slideInRight">
            <h3>CONVOCATORIAS DE TRABAJO 2025</h3>
          </Animaciones>
          <Animaciones animationType="slideInLeft">
            <p>Dirigido a todos nuestos <strong>comuneros</strong>, para que puedan estar informados y hacer seguimiento de las últimas ofertas de trabajo. </p>
          </Animaciones>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
};

export default MyCarousel; // Exporta el componente con el nuevo nombre