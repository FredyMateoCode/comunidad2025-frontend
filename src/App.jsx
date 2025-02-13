import { useState } from 'react'

//Mis importaciones
import Usuarios from './componentes/Usuarios'; // Importamos el componente Usuarios.
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <>
      <Navbar /> {/* Mostrar el Navbar */}
      <div className="container mt-4">
        <h4>Mostrando datos de Prueba - Comunidad 2025</h4>
        <h>Paginá en construcción...</h>
        <Usuarios /> {/* Mostrar el Navbar */}
      </div>
    </>
  );
}


export default App;





//<Usuarios />