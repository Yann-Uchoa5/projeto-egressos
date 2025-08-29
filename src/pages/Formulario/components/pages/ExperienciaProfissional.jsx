import React from 'react';
import FormField from '../common/FormField';
import { SIM_NAO_OPTIONS, MODALIDADE_TRABALHO_OPTIONS, TEMPO_PRIMEIRO_EMPREGO_OPTIONS, FAIXA_SALARIAL_OPTIONS } from '../../constants/formOptions';

const ExperienciaProfissional = ({ formData, onInputChange }) => {
  return (
    <>
      <h2 className="page-title">Experiência Profissional</h2>
      
      <FormField
        type="select"
        id="empregado"
        name="empregado"
        label="Atualmente você está empregado?"
        value={formData.empregado}
        onChange={onInputChange}
        options={SIM_NAO_OPTIONS}
        required
      />

      {formData.empregado === 'Não' && (
        <FormField
          type="text"
          id="motivoNaoEmpregado"
          name="motivoNaoEmpregado"
          label="Qual o motivo de não estar empregado?"
          value={formData.motivoNaoEmpregado}
          onChange={onInputChange}
          placeholder="Descreva o motivo"
          required
          validationType="lettersAndSpaces"
        />
      )}

      {formData.empregado === 'Sim' && (
        <FormField
          type="select"
          id="modalidadeTrabalho"
          name="modalidadeTrabalho"
          label="Qual a modalidade do seu trabalho?"
          value={formData.modalidadeTrabalho}
          onChange={onInputChange}
          options={MODALIDADE_TRABALHO_OPTIONS}
          required
        />
      )}

      <FormField
        type="select"
        id="tempoPrimeiroEmprego"
        name="tempoPrimeiroEmprego"
        label="Quanto tempo levou para conseguir o primeiro emprego após a conclusão do curso?"
        value={formData.tempoPrimeiroEmprego}
        onChange={onInputChange}
        options={TEMPO_PRIMEIRO_EMPREGO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="faixaSalarial"
        name="faixaSalarial"
        label="Qual sua faixa salarial atual?"
        value={formData.faixaSalarial}
        onChange={onInputChange}
        options={FAIXA_SALARIAL_OPTIONS}
        required
      />

      {formData.empregado === 'Sim' && (
        <FormField
          type="text"
          id="atividadeProfissional"
          name="atividadeProfissional"
          label="Descreva brevemente sua atividade profissional atual"
          value={formData.atividadeProfissional}
          onChange={onInputChange}
          placeholder="Descreva sua função e área de atuação"
          required
          validationType="lettersAndSpaces"
        />
      )}
    </>
  );
};

export default ExperienciaProfissional;
