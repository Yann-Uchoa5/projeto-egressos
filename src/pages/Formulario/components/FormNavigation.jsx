import React from 'react';

const FormNavigation = ({ currentPage, onPrevious, onNext }) => {
  return (
    <div className={`form-navigation ${currentPage === 7 ? 'single-button' : ''}`}>
      {currentPage > 0 && (
        <button 
          type="button" 
          className="nav-button prev-button"
          onClick={onPrevious}
        >
          Anterior
        </button>
      )}
      
      {currentPage < 7 ? (
        <button 
          type="button" 
          className="nav-button next-button"
          onClick={onNext}
        >
          Próximo
        </button>
      ) : (
        <button 
          type="submit" 
          className="nav-button next-button"
        >
          Enviar Formulário
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
