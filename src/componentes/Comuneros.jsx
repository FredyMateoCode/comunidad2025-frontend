import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import { FaFilePdf, FaEdit, FaTrash, FaBook } from "react-icons/fa";
import GenerarPDF from "./GenerarPDF"; // Importamos el nuevo componente
import FormularioComunero from "./FormularioComunero"; // Importamos el nuevo componente

import "../assets/styles/UsuariosStyles.css";

const Comuneros = () => {
  const [comuneros, setComuneros] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Buscador
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5; // Número de registros por página
  const maxPageButtons = 10; // Máximo de botones de paginación visibles

  useEffect(() => {
    axios
      .get("https://comunidad2025-backend.onrender.com/mostrarComuneros/comuneros")
      .then((response) => {
        setComuneros(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  // Filtrar los comuneros según el término de búsqueda
  const filteredComuneros = comuneros.filter((comunero) =>
    `${comunero.dni_com} ${comunero.apellidos_com} ${comunero.nombres_com} ${comunero.carne_com}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Paginación
  const totalRecords = filteredComuneros.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredComuneros.slice(indexOfFirstRecord, indexOfLastRecord);

  // Calcular el rango de botones de paginación
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  // Funcines para manejar la generación del PDF
  const handleGenerarPDF = (comunero) => {
    GenerarPDF(comunero);
  };

  const abrirFormularioEnNuevaPestana = (comunero) => {
  const url = `/formulario-comunero?id_com=${comunero.id_com}&dni_com=${comunero.dni_com}&apellidos_com=${comunero.apellidos_com}&nombres_com=${comunero.nombres_com}&majada_com=${comunero.majada_com}&carne_com=${comunero.carne_com}&caserio_com=${comunero.caserio_com}&condicion_com=${comunero.condicion_com}`;

  const nuevaPestana = window.open(url, "_blank"); // Abre en nueva pestaña sin restricciones
  if (nuevaPestana) {
    nuevaPestana.document.title = `Comunero - ${comunero.nombres_com}`; // Intenta cambiar el título de la pestaña
  }
};

  return (
    <div className="container mt-4">
      {/* Buscador */}
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar por DNI, Apellidos o Nombres..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>DNI</th>
              <th>APELLIDOS</th>
              <th>NOMBRES</th>
              <th>MAJADA</th>
              <th>N° CARNÉ</th>
              <th>CASERÍO</th>
              <th>CONDICIÓN</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((comunero) => (
              <tr key={comunero.id_com}>
                <td>{comunero.id_com}</td>
                <td>{comunero.dni_com}</td>
                <td>{comunero.apellidos_com}</td>
                <td>{comunero.nombres_com}</td>
                <td>{comunero.majada_com}</td>
                <td>{comunero.carne_com}</td>
                <td>{comunero.caserio_com}</td>
                <td>{comunero.condicion_com}</td>
                <td>
                  <div className="d-flex gap-1">
                    <Button variant="success" size="sm" onClick={() => handleGenerarPDF(comunero)}>
                      <FaFilePdf />
                    </Button>
                    <Button variant="primary" size="sm" onClick={() => abrirFormularioEnNuevaPestana(comunero)}>
                      <FaBook />
                    </Button>
                    <Button variant="danger" size="sm">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>


      {/* Paginación */}
      {totalPages > 1 && (
        <Pagination size="sm" className="justify-content-center">
          <Pagination.Prev
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          />

          {[...Array(endPage - startPage + 1)].map((_, index) => {
            const pageNumber = startPage + index;
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}

          <Pagination.Next
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      )}
    </div>
  );
};

export default Comuneros;
