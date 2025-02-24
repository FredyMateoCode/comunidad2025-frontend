import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
    <>
    <div className="content"> 
    <h1 className="text-center">CONVOCATORIA N° 10 - FACILITADOR DE OPERACIONES</h1>
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
          <td>Jheysen Ruben</td>
          <td>CRISTOBAL VILLANUEVA</td>
          <td>LA CRUZADA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Yovani</td>
          <td>VARA CERVANTES</td>
          <td>CONDORCAYAN</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default BasicExample;