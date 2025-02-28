import Table from 'react-bootstrap/Table';

function Lista006() {
  return (
    <>
    <div className="content"> 
    <h1 className="text-center">CONVOCATORIA N° 006 - AESA</h1>
    <h3 className="text-center">Aydante de Operaciones Mina</h3>
    <h3 className="text-center">LISTA DE POSTULANTES</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>IT</th>
          <th>NOMBRES</th>
          <th>APELLIDOS</th>
           <th>CASERÍO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Josue Angel</td>
          <td>BAZAN YAPIAS</td>
          <td>CONDORCAYAN</td>
        </tr>
        <tr>
          <td>2</td>
          <td>eLVIS</td>
          <td>BORJA YACHACHIN</td>
          <td>LA CRUZADA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Frank Junior</td>
          <td>QUIJADA MARCELO</td>
          <td>CONDORCAYAN</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Yovani</td>
          <td>VARA CERVANTES</td>
          <td>CONDORCAYAN</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Lucio</td>
          <td>ZEVALLOS MATEO</td>
          <td>SAN CARLOS</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default Lista006;