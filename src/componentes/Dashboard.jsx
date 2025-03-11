import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Comuneros from "../componentes/Comuneros";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); 

    if (!token) {
      navigate("/login"); // Si no hay sesión, redirige al login
    }
  }, [navigate]);

  const cerrarSesion = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  return (
    <>
      <div className="content">
        {/* Botón de cerrar sesión en la parte superior derecha */}
        <div className="d-flex justify-content-end p-3">
          <Button variant="danger" onClick={cerrarSesion} className="w-auto">
            Cerrar Sesión
          </Button>
        </div>
        <h1 className="text-center">PADRÓN GENERAL DE COMUNEROS - 2025</h1>
        <Comuneros />
      </div>
    </>
  );
}

export default Dashboard;

