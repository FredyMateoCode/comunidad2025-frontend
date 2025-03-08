import { useState, useEffect } from "react"; // Netamente React
import axios from "axios"; //Maneja las solicitudes 
import Table from "react-bootstrap/Table"; // Importamos la tabla de Bootstrap

import "../assets/styles/UsuariosStyles.css";
const Comuneros = () => {
  const [comuneros, setComuneros] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/mostrarComuneros/comuneros")
      .then((response) => {
        console.log("Datos recibidos:", response.data);
        setComuneros(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3>Lista de Comuneros en DB - Aiven</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>DNI</th>
            <th>APELLIDOS</th>
            <th>NOMBRES</th>
          </tr>
        </thead>
        <tbody>
          {comuneros.map((comunero) => (
            <tr key={comunero.id_com}>
              <td>{comunero.id_com}</td>
              <td>{comunero.dni_com}</td>
              <td>{comunero.apellidos_com}</td>
              <td>{comunero.nombres_com}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Comuneros;
