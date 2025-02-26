import Table from 'react-bootstrap/Table';



function Dashboard() {
  return (
    <>
    <div className="content"> 
    <h1 className="text-center">LISTA DE PRUEBA</h1>
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
          <td>María</td>
          <td>Pérez Gómez</td>
          <td>Huancayo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Yovani</td>
          <td>Vara Cervantes</td>
          <td>Condorcayan</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Juan</td>
          <td>Ramírez Soto</td>
          <td>Lima</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Ana</td>
          <td>Lopez Torres</td>
          <td>Cusco</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Carlos</td>
          <td>Fernández Díaz</td>
          <td>Arequipa</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Luisa</td>
          <td>Mendoza Salazar</td>
          <td>Trujillo</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Pedro</td>
          <td>García Núñez</td>
          <td>Chiclayo</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Rosa</td>
          <td>Quispe Flores</td>
          <td>Puno</td>
        </tr>
        <tr>
          <td>9</td>
          <td>José</td>
          <td>Vargas Herrera</td>
          <td>Iquitos</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Elena</td>
          <td>Castro Ríos</td>
          <td>Tacna</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Manuel</td>
          <td>Gómez Paredes</td>
          <td>Moquegua</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Sandra</td>
          <td>Salinas Huerta</td>
          <td>Piura</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Fernando</td>
          <td>Chávez Rojas</td>
          <td>Tarapoto</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Paola</td>
          <td>Ponce Medina</td>
          <td>Tumbes</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Ricardo</td>
          <td>León Vargas</td>
          <td>Cajamarca</td>
        </tr>

      </tbody>
    </Table>
    </div>
    </>
  );
}

export default Dashboard;
