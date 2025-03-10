import { jsPDF } from "jspdf";
import QRCode from "qrcode";

const GenerarPDF = async (comunero) => {
  const doc = new jsPDF();

  // Obtener la fecha actual
  const fechaActual = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

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

  const texto = `Que, el Sr.(a) ${comunero.apellidos_com}, ${comunero.nombres_com}, identificado con DNI N° ${comunero.dni_com}, es comunero del caserío de ${comunero.caserio_com}, majada de ${comunero.majada_com}, con carné N° ${comunero.carne_com}, y está registrado en el Padrón General de Nuestra Comunidad Campesina de Huayllay.`;

  const anchoTexto = 175;
  const lineas = doc.splitTextToSize(texto, anchoTexto);

  doc.text(lineas, doc.internal.pageSize.width / 2, 120, { align: "center" });

  doc.text(`Se expide la presente a solicitud del interesado para fines`, 40, 150);
  doc.text(`que estime conveniente.`, 20, 157);

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

export default GenerarPDF;