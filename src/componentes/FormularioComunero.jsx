import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { jsPDF } from "jspdf";

import QRCode from "qrcode";


const FormularioComunero = () => {
  const [searchParams] = useSearchParams();
  const [comunero, setComunero] = useState({
    id_com: "",
    dni_com: "",
    apellidos_com: "",
    nombres_com: "",
    majada_com: "",
    carne_com: "",
    caserio_com: "",
    condicion_com: "",
    connotacion_tit:"",
    connotacion: "", // Nuevo campo de selección
    dni_adicional: "", // Nuevo campo de texto en blanco
    nombres_adicional: "", // Nuevo campo de texto en blanco
    seleccion: "", // Nuevo campo de selección
  });

  useEffect(() => {
    setComunero({
      id_com: searchParams.get("id_com") || "",
      dni_com: searchParams.get("dni_com") || "",
      apellidos_com: searchParams.get("apellidos_com") || "",
      nombres_com: searchParams.get("nombres_com") || "",
      majada_com: searchParams.get("majada_com") || "",
      carne_com: searchParams.get("carne_com") || "",
      caserio_com: searchParams.get("caserio_com") || "",
      condicion_com: searchParams.get("condicion_com") || "",
      connotacion_tit: searchParams.get("connotacion_tit") || "",
      connotoacion: searchParams.get("connotoacion") || "", // Inicia vacío
      dni_adicional: searchParams.get("dni_adicional") || "", // Inicia vacío
      nombres_adicional: searchParams.get("nombres_adicional") || "", // Inicia vacío
      seleccion: searchParams.get("seleccion") || "", // Inicia vacío
    });
  }, [searchParams]);

  const handleChange = (e) => {
    setComunero({ ...comunero, [e.target.name]: e.target.value });
  };

  // Función para generar el PDF
  const handleGenerarPDF = async () => {
  const doc = new jsPDF();

  // Obtener la fecha actual
  const fechaActual = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // Agregar los datos al PDF
  doc.setFont("times", "bold");
  doc.setFontSize(25);
  doc.text("LA JUNTA DIRECTIVA DE LA ", 105, 65, { align: "center" });
  doc.text("COMUNIDAD CAMPESINA", 105, 77, { align: "center" });
  doc.text("DE HUAYLLAY", 105, 89, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  doc.text("HACE CONSTAR", 105, 105, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);

  const texto = `Que, ${comunero.connotacion}. ${comunero.nombres_adicional}, identificado con DNI N° ${comunero.dni_adicional}, es ${comunero.seleccion} ${comunero.connotacion_tit} ${comunero.apellidos_com}, ${comunero.nombres_com}, quien es comunero del caserío de ${comunero.caserio_com}, majada de ${comunero.majada_com}, con carné N° ${comunero.carne_com}, y está registrado en el Padrón General de Nuestra Comunidad Campesina de Huayllay.`;

  const anchoTexto = 175;
  const lineas = doc.splitTextToSize(texto, anchoTexto);

  doc.text(lineas, doc.internal.pageSize.width / 2, 120, { align: "center" });

  doc.text(`Se expide la presente a solicitud del interesado para fines`, 40, 157);
  doc.text(`que estime conveniente.`, 20, 164);

  // Incluir la fecha actual
  doc.text(`Huayllay, ${fechaActual}`, 100, 180);
  doc.text(`Atentamente;.`, 85, 205);

  // Generar QR con los datos del comunero
  const qrData = `DNI: ${comunero.dni_com}, Carné: ${comunero.carne_com}`;
  const qrImageData = await QRCode.toDataURL(qrData); // Generar QR en base64

  // Insertar QR en la parte inferior derecha
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.addImage(qrImageData, "PNG", pageWidth - 40, pageHeight - 40, 30, 30); // Posición y tamaño

  window.open(doc.output("bloburl"), "_blank");
};


  return (
    <div className="container mt-4">
      <h3>Datos del Comunero</h3>
      <Row className="mb-3">
        {/* Primera columna */}
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>ID:</strong></Form.Label>
            <Form.Control type="text" value={comunero.id_com} readOnly />
          </Form.Group>
        </Col>

        {/* Segunda columna */}
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>DNI:</strong></Form.Label>
            <Form.Control type="text" name="dni_com" value={comunero.dni_com} onChange={handleChange} />
          </Form.Group>
        </Col>

        {/* Tercera columna (solo visible en pantallas medianas y grandes) */}
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>Apellidos:</strong></Form.Label>
            <Form.Control type="text" name="apellidos_com" value={comunero.apellidos_com} onChange={handleChange} />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        {/* Primera columna */}
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>Nombres:</strong></Form.Label>
            <Form.Control type="text" name="nombres_com" value={comunero.nombres_com} onChange={handleChange} />
          </Form.Group>
        </Col>

        {/* Segunda columna */}
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>Majada:</strong></Form.Label>
            <Form.Control type="text" name="majada_com" value={comunero.majada_com} onChange={handleChange} />
          </Form.Group>
        </Col>

        {/* Tercera columna (solo visible en pantallas medianas y grandes) */}
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>N° Carné:</strong></Form.Label>
            <Form.Control type="text" name="carne_com" value={comunero.carne_com} onChange={handleChange} readOnly />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        {/* Primera columna */}
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>Caserío:</strong></Form.Label>
            <Form.Control type="text" name="caserio_com" value={comunero.caserio_com} onChange={handleChange} readOnly />
          </Form.Group>
        </Col>

        {/* Segunda columna */}
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>Condición:</strong></Form.Label>
            <Form.Control type="text" name="condicion_com" value={comunero.condicion_com} onChange={handleChange} readOnly />
          </Form.Group>
        </Col>

        {/* Tercera columna (solo visible en pantallas medianas y grandes) */}
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>Seleccionar Connotación:</strong></Form.Label>
            <Form.Select name="connotacion_tit" value={comunero.connotacion_tit} onChange={handleChange}>
              <option value="">Seleccione una opción</option>
              <option value="del Señor">Señor</option>
              <option value="de la Señora">Señora</option>
            </Form.Select>
          </Form.Group>
        </Col>

      </Row>
      <Row className="mb-3">
        <h3>Datos del Familiar:</h3>
      </Row>

      <Row className="mb-3">
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>Seleccionar Connotación:</strong></Form.Label>
            <Form.Select name="connotacion" value={comunero.connotacion} onChange={handleChange}>
              <option value="">Seleccione una opción</option>
              <option value="el Niño">Niño</option>
              <option value="la Niña">Niña</option>
              <option value="el Joven">Joven</option>
              <option value="la Señorita">Señorita</option>
              <option value="el Señor">Señor</option>
              <option value="la Señora">Señora</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>DNI N°</strong></Form.Label>
            <Form.Control type="text" name="dni_adicional" value={comunero.dni_adicional} onChange={handleChange} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong><strong>Apellidos y Nombres:</strong></strong></Form.Label>
            <Form.Control type="text" name="nombres_adicional" value={comunero.nombres_adicional} onChange={handleChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label><strong>Seleccionar Parentesco</strong></Form.Label>
            <Form.Select name="seleccion" value={comunero.seleccion} onChange={handleChange}>
              <option value="">Seleccione una opción</option>
              <option value="Hijo">Hijo</option>
              <option value="Hija">Hija</option>
              <option value="Esposo">Esposo</option>
              <option value="Esposa">Esposa</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
        
      <Form>    
        {/* Botones */}
        <div className="d-flex gap-2">
          <Button variant="warning" onClick={handleGenerarPDF}>
            Generar PDF
          </Button>
          <Button variant="danger" onClick={() => window.close()}>
            Cancelar
          </Button>
        </div>
      </Form>
    </div>
    
  );
};

export default FormularioComunero;
