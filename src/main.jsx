import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//Mis importaciones:
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos bootstrap.



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

