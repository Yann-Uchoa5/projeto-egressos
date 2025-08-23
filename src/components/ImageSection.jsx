import React from 'react';
import alunoImage from '../assets/aluno.png';

const ImageSection = () => {
  return (
    <div className="image-section">
      <div className="image-container">
        <img 
          src={alunoImage} 
          alt="Imagem do aluno" 
          className="aluno-image"
          
        />
         <p className="image-copyright">
        © Autoria própria.
      </p>
      </div>
    </div>
  );
};

export default ImageSection;
