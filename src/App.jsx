//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Usuarios from './componentes/Usuarios';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>Vite + React</h3>
      <div>
        <h4>Mostrando datos de Prueba Comunidad 2025</h4>
        <Usuarios />
      </div>
    </>
  )
}

export default App
