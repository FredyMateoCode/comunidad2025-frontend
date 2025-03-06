import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFileEarmarkPdf } from 'react-icons/bs';


import detallesPDF from '../../assets/imagenes/detalles2.pdf';

function Anexos() {
  const handleOpenPDF = () => {
    window.open(detallesPDF, '_blank');


  };

  return (
    <>
      <div className="content">
        <h1 className="text-center">CONVOCATORIA DOCENTE - 2025</h1>
        <h3 className="text-center">Inicial - Primaria - Secundaria</h3>
        <h3 className="text-center">PLAZAS - CRONOGRAMA - ANEXOS</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>IT</th>
              <th>ACTIVIDADES</th>
              <th>FECHA</th>
              <th>ESTADO</th>
              <th>VER</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Publicacion de Plazas</td>
              <td>5 de marzo de 2025</td>
              <td>PUBLICADO</td>
              <td>
                <Button variant="success" onClick={handleOpenPDF}>
                  <BsFileEarmarkPdf /> Ver
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Publicación de resultados de la evaluación.</td>
              <td>12 de marzo de 2025</td>
              <td>PENDIENTE</td>
              <td>
                <Button variant="danger">
                  <BsFileEarmarkPdf /> Ver
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Publicación final de cuadro de méritos.</td>
              <td>14 de marzo de 2025</td>
              <td>PENDIENTE</td>
              <td>
                <Button variant="danger">
                  <BsFileEarmarkPdf /> Ver
                </Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Adjudicación de plaza.</td>
              <td>14 de marzo de 2025</td>
              <td>PENDIENTE</td>
              <td>
                <Button variant="danger" >
                  <BsFileEarmarkPdf /> Ver
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Anexos;
