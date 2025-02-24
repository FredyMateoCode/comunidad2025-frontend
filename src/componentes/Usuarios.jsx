import { useState, useEffect } from "react"; // Netamente React
import axios from "axios"; //Maneja las solicitudes 
import Table from "react-bootstrap/Table"; // Importamos la tabla de Bootstrap

import "../assets/styles/UsuariosStyles.css";
const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://comunidad2025-backend.onrender.com/mostrarUsuarios/Usuarios2025")
      .then((response) => {
        console.log("Datos recibidos:", response.data);
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3>Lista de Usuarios en DB - Aiven</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de Usuario</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id_usuario}>
              <td>{usuario.id_usuario}</td>
              <td>{usuario.nombre_usuario}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Usuarios;
