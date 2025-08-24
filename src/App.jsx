import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import TelaInicial from "./pages/TelaInicial/home";
import Formulario from "./pages/Formulario/Formulario";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
