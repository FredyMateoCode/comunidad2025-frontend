import { jsPDF } from "jspdf";

const GenerarPDF = (comunero) => {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth(); // Obtiene el ancho de la página
  const textWidth = doc.getTextWidth("CONSTANCIA DE COMUNERO - TITULAR"); // Obtiene el ancho del texto
  const xPosition = (pageWidth - textWidth) / 2; // Calcula la posición centrada

  
  doc.text("HACE CONSTAR", xPosition, 180);
  doc.text(`Que, el Señor(a), ${comunero.apellidos_com}, ${comunero.nombres_com}`, 20, 85);
  doc.text(`identificado con DNI N° ${comunero.dni_com} es comunero ${comunero.condicion_com}`, 20, 90);
  doc.text(`del caserío de, ${comunero.caserio_com} con carné N° ${comunero.carne_com}`, 20, 95);
  doc.text(`perteneciente a la majada de ${comunero.majada_com}`, 20, 100);
  doc.text(`y está registrado en el Padrón General de nuestra`, 20, 110);
  doc.text(`Comunidad Campesina de Huayllay.`, 20, 115);
  doc.text(`Se expide la presente a solicitud del interesado.`, 60, 125);
  doc.text(`para fines que estime conveniente.`, 20, 130);
  doc.text(`Huayllay, 09 de Marzo de 2025`, 100, 140);
  doc.text(`Atentamente;.`, 85, 150);













  doc.setFont("times", "bold"); // Cambiar a Times New Roman en negrita
  doc.setFontSize(30); // Tamaño más grande
  doc.text("LA JUNTA DIRECTIVA DE LA ", 105, 75, { align: "center" });
  doc.text("DE LA COMUNIDAD CAMPESINA DE HUAYLLAY", 105, 25, { align: "center" });

  doc.setFont("helvetica", "normal"); // Cambiar a Helvética normal
  doc.setFontSize(24); // Reducir tamaño de texto
  let y = 150;
  const lineSpacing = 10;
  doc.text(`DNI: ${comunero.dni_com}`, 20, y);
  y += lineSpacing;
  doc.text(`Apellidos: ${comunero.apellidos_com}`, 20, y);
  y += lineSpacing;
  doc.text(`Nombres: ${comunero.nombres_com}`, 20, y);




const texto = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ${comunero.apellidos_com}It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const anchoTexto = 150; // Ancho máximo antes de dividir la línea
const lineas = doc.splitTextToSize(texto, anchoTexto);

doc.text(lineas, 150, 150); // Imprime el texto en múltiples líneas



  doc.text(`DNI: ${comunero.dni_com}`, 120, 200);
  doc.text(`Apellidos: ${comunero.apellidos_com}`, 120, 207);
  doc.text(`Nombres: ${comunero.nombres_com}`, 120, 214);
  doc.text(`Majada: ${comunero.majada_com}`, 120, 221);
  doc.text(`N° Carné: ${comunero.carne_com}`, 120, 228);
  doc.text(`Caserío: ${comunero.caserio_com}`, 120, 234);
  doc.text(`Condición: ${comunero.condicion_com}`, 120, 240);

  window.open(doc.output("bloburl"), "_blank");
};

export default GenerarPDF;
/*
import { jsPDF } from "jspdf";
import membrete from "../assets/imagenes/membrete.png"; // Importar la imagen

const GenerarPDF = (comunero) => {
  const doc = new jsPDF();

  const img = new Image();
  img.src = membrete;
  img.onload = function () {
    doc.addImage(img, "PNG", 0, 0, 210, 297); // Ajustar la imagen al tamaño A4

    // Agregar texto encima de la imagen
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // Color negro
    doc.text("CONSTANCIA DE COMUNERO - TITULAR", 30, 40);
    doc.text(`DNI: ${comunero.dni_com}`, 20, 60);
    doc.text(`Apellidos: ${comunero.apellidos_com}`, 20, 70);
    doc.text(`Nombres: ${comunero.nombres_com}`, 20, 80);
    doc.text(`Majada: ${comunero.majada_com}`, 20, 90);
    doc.text(`N° Carné: ${comunero.carne_com}`, 20, 100);
    doc.text(`Caserío: ${comunero.caserio_com}`, 20, 110);
    doc.text(`Condición: ${comunero.condicion_com}`, 20, 120);

    // Abrir el PDF en una nueva pestaña
    window.open(doc.output("bloburl"), "_blank");
  };
};

export default GenerarPDF;
*/