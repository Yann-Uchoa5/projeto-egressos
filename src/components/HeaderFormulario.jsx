import React from 'react';
import ifceLogo from '../assets/ifce-logo.png';
import '../pages/TelaInicial/home.css';

const HeaderFormulario = () => {
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
      </div>
      <div className="header-sub">
        <h2 className="portal-title">Portal dos Egressos IFCE</h2>
      </div>
    </header>
  );
};

export default HeaderFormulario;
