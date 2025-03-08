import Table from 'react-bootstrap/Table';

/*Componentes que interacturan con el backend*/
import Usuarios from "../componentes/Usuarios";//Componente que muestra los usuarios de la base de datos.
import Comuneros from "../componentes/Comuneros";//Componente que muestra los usuarios de la base de datos.

function Dashboard() {
  return (
    <>
    <div className="content"> 
    <h1 className="text-center">PADRÓN GENERAL DE COMUNEROS - 2025</h1>
    <Comuneros />
    </div>
    </>
  );
}

export default Dashboard;
