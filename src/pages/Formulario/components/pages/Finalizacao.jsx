import React from 'react';

const Finalizacao = ({ formData, onInputChange }) => {
  return (
    <>
      <h2 className="page-title">Finalização</h2>
      
      <div className="form-group">
        <p className="success-message">
          Obrigado por participar da pesquisa!
        </p>
        <p className="success-message">
          Clique em "Enviar Formulário" para concluir sua participação.
        </p>
        <p className="info-message">
          Suas respostas são muito importantes para melhorarmos nossos cursos.
        </p>
      </div>
      
      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="aceitaUsoDados"
            name="aceitaUsoDados"
            checked={formData.aceitaUsoDados}
            onChange={onInputChange}
            className="checkbox-input"
            required
          />
          <label htmlFor="aceitaUsoDados" className="checkbox-label">
            <span className="required">*</span> Eu confirmo e autorizo o uso dos meus dados pessoais para fins de pesquisa acadêmica, conforme a Lei Geral de Proteção de Dados (LGPD). Declaro que as informações fornecidas são verdadeiras e que estou ciente de que meus dados serão tratados com confidencialidade e utilizados exclusivamente para fins educacionais e de melhoria dos cursos do IFCE Campus Boa Viagem.
          </label>
        </div>
      </div>
    </>
  );
};

export default Finalizacao;
