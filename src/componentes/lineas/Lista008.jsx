import Table from 'react-bootstrap/Table';

function Lista008() {
  return (
    <>
    <div className="content"> 
    <h1 className="text-center">CONVOCATORIA N° 008 - ROBOCON</h1>
    <h3 className="text-center">Operador de Mixer</h3>
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
          <td>Melgar Anibar</td>
          <td>AGÜERO MONJE</td>
          <td>SAN CARLOS</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3 className="text-center">Ayudante de Robot</h3>
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
          <td>CABALLERO HUAYNAPICHO</td>
          <td>Esmiler Russbel</td>
          <td>CONDORCAYAN</td>
        </tr>
        <tr>
          <td>2</td>
          <td>GOMEZ QUISPE</td>
          <td>Frank Michael</td>
          <td>CANCHACUCHO</td>
        </tr>
        <tr>
          <td>3</td>
          <td>YACHAS GOMEZ</td>
          <td>Elver Cesar </td>
          <td>LA CRUZADA</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default Lista008;