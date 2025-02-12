import { useState, useEffect } from "react";
import axios from "axios";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("https://comunidad2025-backend.onrender.com/mostrarUsuarios/Usuarios2025")
      .then(response => {
        console.log("Datos recibidos:", response.data); // Verifica en la consola
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios en DB - Aiven</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id_usuario}>{usuario.nombre_usuario}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
