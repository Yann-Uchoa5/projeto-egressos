import React from 'react';
import { useNavigate } from "react-router-dom";
import ifceLogo from '../assets/ifce-logo.png';
import '../pages/TelaInicial/home.css';

const HeaderFormulario = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-main">
        <div className="header-left">
          <div className="logo-container" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
            <img 
              src={ifceLogo} 
              alt="Logo IFCE" 
              className="ifce-logo"
            />
          </div>
        </div>
      </div>
      <div className="header-sub">
        <h2 className="portal-title">Portal dos Egressos IFCE</h2>
      </div>
    </header>
  );
};

export default HeaderFormulario;
