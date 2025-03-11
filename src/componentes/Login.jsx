import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import axios from "axios";
import "../assets/styles/Login.css";//Estilos 
import Swal from "sweetalert2";

const Login = () => {
  //Para capturar los datos del formulario
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para la navegación

  

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://comunidad2025-backend.onrender.com/autenticarUsuarios/login",
        {
          usuario,
          password,
        }
      );

      console.log("Respuesta del servidor:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Guarda el token

        // ✅ Mostrar mensaje del backend con SweetAlert2
        Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión exitoso!",
          text: response.data.mensaje || "Bienvenido a la plataforma.",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          navigate("/dashboard"); // Redirige al Dashboard después de cerrar la alerta
        });

      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.data.mensaje || "No se recibió un token válido.",
        });
      }

    } catch (error) {
      console.error("Error en la autenticación:", error);

      // ⚠️ Verifica si el backend envía un mensaje de error
      const mensajeError =
        error.response?.data?.mensaje || "Usuario o contraseña incorrectos";

      Swal.fire({
        icon: "error",
        title: "Error de autenticación",
        text: mensajeError,
      });
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
