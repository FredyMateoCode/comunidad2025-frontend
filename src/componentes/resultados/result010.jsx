import Table from 'react-bootstrap/Table';

function result010() {
  return (
    <>
    <div className="content"> 
    <h1 className="text-center">RESULTADOS CONVOCATORIA N° 10 - FACILITADOR DE OPERACIONES</h1>
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
          <td>Jheysen Ruben</td>
          <td>CRISTOBAL VILLANUEVA</td>
          <td>NO APTO POR PERFIL</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Yovani</td>
          <td>VARA CERVANTES</td>
          <td>NO APTO EN ENTREVISTA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Yordan Dimas</td>
          <td>VERASTEGUI HINOSTROZA</td>
          <td>NO APTO EN ENTREVISTA</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default result010;