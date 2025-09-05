import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/login";
import TelaInicial from "./pages/TelaInicial/home";
import Formulario from "./pages/Formulario/formulario";
import RespostasFormulario from "./pages/RespostasFormulario/RespostasFormulario";
import DetalhesEgresso from "./pages/DetalhesEgresso/detalhesegresso";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/respostas" element={<RespostasFormulario />} />
          <Route path="/egresso/:id" element={<DetalhesEgresso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
