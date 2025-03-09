import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { jsPDF } from "jspdf";

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
    datos_adicionales: "", // Nuevo campo de texto en blanco
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
      datos_adicionales: "", // Inicia vacío
      seleccion: "", // Inicia vacío
    });
  }, [searchParams]);

  const handleChange = (e) => {
    setComunero({ ...comunero, [e.target.name]: e.target.value });
  };

  // Función para generar el PDF
  const handleGenerarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Datos del Pariente del Comunero", 10, 10);

    // Agregar los datos al PDF
    let y = 20;
    for (const key in comunero) {
      doc.text(`${key.replace(/_/g, " ").toUpperCase()}: ${comunero[key]}`, 10, y);
      y += 10;
    }

    // Abrir en nueva ventana
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
  };

  return (
    <div className="container mt-4">
      <h3>Formulario del Comunero</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={comunero.id_com} readOnly />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" name="dni_com" value={comunero.dni_com} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" name="apellidos_com" value={comunero.apellidos_com} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" name="nombres_com" value={comunero.nombres_com} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Majada</Form.Label>
          <Form.Control type="text" name="majada_com" value={comunero.majada_com} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>N° Carné</Form.Label>
          <Form.Control type="text" name="carne_com" value={comunero.carne_com} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Caserío</Form.Label>
          <Form.Control type="text" name="caserio_com" value={comunero.caserio_com} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Condición</Form.Label>
          <Form.Control type="text" name="condicion_com" value={comunero.condicion_com} onChange={handleChange} />
        </Form.Group>

        {/* Campo adicional de texto */}
        <Form.Group className="mb-3">
          <Form.Label>Datos Adicionales</Form.Label>
          <Form.Control type="text" name="datos_adicionales" value={comunero.datos_adicionales} onChange={handleChange} />
        </Form.Group>

        {/* Lista de opciones */}
        <Form.Group className="mb-3">
          <Form.Label>Seleccionar Opción</Form.Label>
          <Form.Select name="seleccion" value={comunero.seleccion} onChange={handleChange}>
            <option value="">Seleccione una opción</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </Form.Select>
        </Form.Group>

        {/* Botones */}
        <div className="d-flex gap-2">
          <Button variant="primary" onClick={handleGenerarPDF}>
            Generar PDF
          </Button>
          <Button variant="secondary" onClick={() => window.close()}>
            Cancelar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormularioComunero;
