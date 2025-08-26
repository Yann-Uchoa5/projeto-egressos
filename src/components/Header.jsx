import React from 'react';
import ifceLogo from '../assets/ifce-logo.png';
import { useNavigate } from "react-router-dom";

const Header = () => {

   const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-main">
        <div className="header-left">
          <div className="logo-container">
            <img 
              src={ifceLogo} 
              alt="Logo IFCE" 
              className="ifce-logo"
            />
          </div>
        </div>
        <div className="header-right">
          <button className="questionario-btn" onClick={() => navigate("/formulario")}>Questionário</button>
        </div>
      </div>
      <div className="header-sub">
        <h2 className="portal-title">Portal dos Egressos IFCE</h2>
      </div>
    </header>
  );
};

export default Header;
