import React, { useEffect } from "react"; // Agregamos useEffect

import { Button } from "react-bootstrap"; //Para Utilizar react y bootstrap

import { useNavigate } from "react-router-dom";

import "../../assets/styles/TimelineStyles.css";//Estilos CSS de este componente

const timelineData = [
  { year: "1", 
    title: "PUBLICACIÓN",
    icon: "📆", color: "#f3bc0c", 
    description: "📆 05 de marzo de 2025 ✅"},

  { year: "2",
    title: "PLAZAS - CRONOGRAMA - ANEXOS",
    icon: "👨‍🏫", color: "#15cb32",
    description: "Detalles.✅", 
    uttonText: "Detalles",
    buttonText: "Ver",
    route: "/Anexos" },

  { year: "3",
    title: "PRESENTACIÓN DE DOCUMENTOS",
    icon: "📂", color: "#f34c0c",
    description: "📆 Hasta 10 de marzo de 2025 12:00 m ❌"},

  { year: "4",
    title: "FEEDBACK",
    icon: "♻", color: "#d63e1e",
    description: "Información Adicional❌",
    buttonText: "Leer Más" }
    ];


const Tmdoc = () => {

  const navigate = useNavigate(); // Hook para navegar entre páginas

  // ⬇️ Se asegura de que la vista inicie desde el principio del componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="timeline-container">
      <h1 className="text-center">Convocatoria Docente 2025</h1>
      <h2 className="text-center">Inicial - Primaria - Secundaria</h2>
      <div className="timeline-line"></div>
      {timelineData.map((item, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? "right" : "left"}`}>
          <div className="timeline-content">
            <h3>{item.title} {item.icon}</h3>
            <p>{item.description}</p>
            {item.buttonText && (
              <Button 
                variant="warning" 
                className="text-center timeline-button"
                onClick={() => navigate(item.route)} // Navega al componente correspondiente
              >
                {item.buttonText}
              </Button>
            )}
          </div>
          <div className="timeline-circle large-circle" style={{ backgroundColor: item.color }}>
            {item.year}
          </div>
        </div>
      ))}
    </div>
  );
};


export default Tmdoc;
