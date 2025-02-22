import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { BiHome, BiBriefcase, BiPhone } from "react-icons/bi"; // Importamos los iconos

import "../assets/styles/EncabezadoStyles.css";


import Animaciones from "../componentes/Animaciones";

//Librerias para icononos
import { FaFacebook, FaYoutube, FaWhatsapp  } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { BsFillDoorOpenFill } from "react-icons/bs";

//Librerias para imagen
import Image from 'react-bootstrap/Image';
import Logo from "../assets/logo_cch.png?url";


import { Link } from "react-router-dom"; // ✅ Importar Link de react-router-dom


const Encabezado = ({ className }) => {
  return (
    <Navbar bg="warning" variant="light" className={`shadow encabezado ${className}`}>
        {/* Fila 1 */}
        <Row className="w-100 text-center">
          {/* Columna 1 */}
          <Col className = "bg-warning" xs={12} ms={12} md={3} lg={3}>
            <Animaciones animationType="slideInLeft">
              <Image src={Logo} roundedCircle width={60} height={60} />
            <strong>CCH - 2025</strong>
            </Animaciones>
          </Col>

          {/* Columna 2 */}
          <Col className=" bg-warning text-black" xs={4} ms={4} md={3} lg={3}>
            <Animaciones animationType="slideInLeft">
              <FaFacebook size={20} className="me-2" />
              Facebook<br />
              <FaYoutube size={20} className="me-2" />
              Youtube
            </Animaciones>
          </Col>

          {/* Columna 3 */}
          <Col className="bg-warning text-black" xs={4} ms={4} md={3} lg={3}>
            <Animaciones animationType="slideInRight">
              <FaWhatsapp size={20} className="me-2" />
              956-176-695<br />
              <BiPhone size={20} className="me-2" />
              941-957-176
            </Animaciones>
          </Col>

          {/* Columna 4 */}
          <Col className="bg-warning text-black" xs={4} ms={4} md={3} lg={3}>
            <Animaciones animationType="slideInRight">
              <Button variant="danger" as={Link} to="/Login">
                <BsFillDoorOpenFill className="me-2" size={20} /> Acceder
              </Button>

            </Animaciones>

          </Col>
        </Row>
    </Navbar>
  );
};

export default Encabezado;
