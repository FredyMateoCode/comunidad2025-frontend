import React from "react";

import { Button } from "react-bootstrap";



import "../assets/styles/TimelineStyles.css";

const timelineData = [
  { year: "1", 
    title: "WEB DESIGNING 2025",
    icon: "🌍", color: "#f3bc0c", 
    description: "Lorem ipsum dolor sit amet.", 
    buttonText: "Ver Más" },

  { year: "2",
    title: "WEB DEVELOPMENT",
    icon: "✈️", color: "#f34c0c",
    description: "Pellentesque cursus quam ut nisi tincidunt.", 
    uttonText: "Detalles",
    buttonText: "Ver Más" },
  { year: "3",
    title: "JAVA SCRIPT",
    icon: "⚙️", color: "#0c5ff3",
    description: "Mauris a ante quis magna tempor placerat.",
    buttonText: "Explorar" },
  { year: "4",
    title: "WEB DESIGNING",
    icon: "💻", color: "#d63e1e",
    description: "Vestibulum feugiat metus sed purus dignissim.",
    buttonText: "Leer Más" },
  { year: "5",
    title: "PUBLICACIÓN",
    icon: "✅",
    color: "#f3bc0c",
    description: "📆 Lunes, 17 de Febrero de 2025",
    buttonText: "Abrir" }
    ];


const Timeline = () => {
  return (

    <div className="timeline-container">
    <h1 className = "text-center">Convocatoria N° 010</h1>
    <h2 className = "text-center">01 Facilitador de Operaciones</h2>
      <div className="timeline-line"></div>
      {timelineData.map((item, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? "right" : "left"}`}>
          <div className="timeline-content">
            <h3>{item.title} {item.icon}</h3>
            <p>{item.description}</p>
            {item.buttonText && (
              <Button variant="primary" className="text-center timeline-button">{item.buttonText}</Button> 
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


export default Timeline;
