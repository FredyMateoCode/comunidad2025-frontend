import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import axios from "axios";
import "../assets/styles/Login.css";//Estilos 

const Login = () => {
  //Para capturar los datos del formulario
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para la navegación

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //const response = await axios.post("http://localhost:5000/autenticarUsuarios/login", {
      const response = await axios.post("https://comunidad2025-backend.onrender.com/autenticarUsuarios/login", {
        usuario,
        password,
      });

      console.log("Respuesta del servidor:", response.data);
      alert("Inicio de sesión exitoso - BIENVENIDOS");
      navigate("/dashboard"); // Ruta que se muestra desspues del inicio de sesion.


    } catch (error) {
      console.error("Error en la autenticación:", error);

      if (error.response) {
        // Si el backend envía un mensaje de error, lo mostramos
        alert(error.response.data.mensaje || "Usuario o contraseña incorrectos");
      } else {
        // Error en la conexión al backend
        alert("Error en la conexión al servidor");
      }
    }
  };

  /*Creación del formulario*/
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div className="input-group">
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            placeholder = "Ingrese su Usuario"
          />
        </div>
        <div className="input-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder = "Ingrese su contraseña"
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
