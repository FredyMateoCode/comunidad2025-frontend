import React from "react";
import { FaEnvelope } from "react-icons/fa"; // Importamos el ícono de correo

const BotonGmail = () => {
  const handleClick = () => {
    window.location.href = "mailto:comunidadcampesinahuayllay@gmail.com"; // Reemplaza con tu correo
  };

  return (
    <button className="boton-gmail" onClick={handleClick}>
      <FaEnvelope />
    </button>
  );
};

export default BotonGmail;
