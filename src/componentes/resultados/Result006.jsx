import Table from 'react-bootstrap/Table';

function result006() {
  return (
    <>
    <div className="content"> 
    <h1 className="text-center">RESULTADOS CONVOCATORIA N° 006 - AYUDANTE DE OPERACIONES MINA</h1>
    <h4 className="text-center">📆 28 de febrero 2024</h4>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>IT</th>
          <th>NOMBRES</th>
          <th>APELLIDOS</th>
           <th>RESULTADO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Josue Angel</td>
          <td>BAZAN YAPIAS</td>
          <td>NO APTO - NO CUMPLE REQUISITOS</td>
        </tr>
        <tr>
          <td>2</td>
          <td>eLVIS</td>
          <td>BORJA YACHACHIN</td>
          <td>NO APTO - NO CUMPLE REQUISITOS</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Frank Junior</td>
          <td>QUIJADA MARCELO</td>
          <td>NO APTO - NO CUMPLE REQUISITOS</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Yovani</td>
          <td>VARA CERVANTES</td>
          <td>NO APTO - NO CUMPLE REQUISITOS</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Lucio</td>
          <td>ZEVALLOS MATEO</td>
          <td><strong>APTO - EN PROCESO</strong></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default result006;