import React from 'react';

const ProgressBar = ({ progress, currentPage }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-text">
        Página {currentPage + 1} de 8 - {Math.round(progress)}% completo
      </div>
    </div>
  );
};

export default ProgressBar;
