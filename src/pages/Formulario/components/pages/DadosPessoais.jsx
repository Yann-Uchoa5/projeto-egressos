import React from 'react';
import FormField from '../common/FormField';
import { GENERO_OPTIONS, ETNIA_OPTIONS, FAIXA_ETARIA_OPTIONS } from '../../constants/formOptions';

const DadosPessoais = ({ formData, onInputChange, validationErrors }) => {

  return (
    <>
      <h2 className="page-title">Dados Pessoais</h2>
      
      <FormField
        type="text"
        id="nomeCompleto"
        name="nomeCompleto"
        label="Nome completo"
        value={formData.nomeCompleto}
        onChange={onInputChange}
        placeholder="Digite seu nome completo"
        required
        validationType="lettersAndSpaces"
      />

             <FormField
         type="email"
         id="email"
         name="email"
         label="E-mail principal"
         value={formData.email}
         onChange={onInputChange}
         placeholder="Digite seu e-mail"
         required
         className={validationErrors.email ? 'error' : ''}
         style={validationErrors.email ? {
           height: '40px',
           padding: '8px 12px',
           fontSize: '14px',
           boxSizing: 'border-box'
         } : {}}
       />
       
       {/* Aviso de validação para email */}
       {validationErrors.email && (
         <div className="validation-message">
           {validationErrors.email}
         </div>
       )}

             <FormField
         type="tel"
         id="telefone"
         name="telefone"
         label="Telefone"
         value={formData.telefone}
         onChange={onInputChange}
         placeholder="(00) 00000-0000"
         required
         validationType="phone"
         className={validationErrors.telefone ? 'error' : ''}
         style={validationErrors.telefone ? {
           height: '40px',
           padding: '8px 12px',
           fontSize: '14px',
           boxSizing: 'border-box'
         } : {}}
       />
       
       {/* Aviso de validação para telefone */}
       {validationErrors.telefone && (
         <div className="validation-message">
           {validationErrors.telefone}
         </div>
       )}

      <FormField
        type="select"
        id="genero"
        name="genero"
        label="Qual sua identidade de gênero?"
        value={formData.genero}
        onChange={onInputChange}
        options={GENERO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="etnia"
        name="etnia"
        label="Considerando sua identidade etnico-racial, como você se autodeclara?"
        value={formData.etnia}
        onChange={onInputChange}
        options={ETNIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="faixaEtaria"
        name="faixaEtaria"
        label="Qual sua faixa-etária?"
        value={formData.faixaEtaria}
        onChange={onInputChange}
        options={FAIXA_ETARIA_OPTIONS}
        required
      />
    </>
  );
};

export default DadosPessoais;
