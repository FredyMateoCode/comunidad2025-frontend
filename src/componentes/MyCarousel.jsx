import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importa el Carousel de React Bootstrap
import Imagen1 from '../assets/imagenes/imagen1.jpg?url';
import Imagen2 from '../assets/imagenes/imagen2.jpg?url';
import Imagen3 from '../assets/imagenes/imagen3.jpg?url';

import Animaciones from "../componentes/Animaciones";

import "../assets/styles/CarouselStyles.css";

const MyCarousel = () => { // Cambia el nombre del componente
  return (
    <Carousel> {/* Usa el Carousel de React Bootstrap */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen1}
          alt="First slide"
        />
        <Carousel.Caption>
        <Animaciones animationType="slideInRight">
        <h3>Primer slide</h3>
        </Animaciones>

        <Animaciones animationType="slideInLeft">
        <p>Descripción del primer slide.</p>
        </Animaciones>          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <Animaciones animationType="slideInRight">
            <h3>Primer slide</h3>
          </Animaciones>
          <Animaciones animationType="slideInLeft">
            <p>Prueba de Texto
            </p>
          </Animaciones>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Animaciones animationType="slideInRight">
            <h3>Primer slide</h3>
          </Animaciones>
          <Animaciones animationType="slideInLeft">
            <p>Descripción del primer slide.</p>
          </Animaciones>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel; // Exporta el componente con el nuevo nombre