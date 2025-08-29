import React from 'react';
import FormField from '../common/FormField';
import { SIM_NAO_OPTIONS, CURSO_OPTIONS } from '../../constants/formOptions';

const AcaoAfirmativaLocalizacao = ({ formData, onInputChange }) => {
  return (
    <>
      <h2 className="page-title">Ação Afirmativa e Localização</h2>
      
      <FormField
        type="select"
        id="acaoAfirmativa"
        name="acaoAfirmativa"
        label="Você ingressou no IFCE através de alguma ação afirmativa?"
        value={formData.acaoAfirmativa}
        onChange={onInputChange}
        options={SIM_NAO_OPTIONS}
        required
      />

      {formData.acaoAfirmativa === 'Sim' && (
        <FormField
          type="text"
          id="acaoAfirmativaTipo"
          name="acaoAfirmativaTipo"
          label="Qual ação afirmativa?"
          value={formData.acaoAfirmativaTipo}
          onChange={onInputChange}
          placeholder="Ex: Cotas para negros, indígenas, etc."
          required
          validationType="lettersAndSpaces"
        />
      )}

      <FormField
        type="text"
        id="estadoAntes"
        name="estadoAntes"
        label="Em qual estado você residia antes de ingressar no IFCE?"
        value={formData.estadoAntes}
        onChange={onInputChange}
        placeholder="Digite o estado"
        required
        validationType="lettersAndSpaces"
      />

      <FormField
        type="text"
        id="cidadeAntes"
        name="cidadeAntes"
        label="Em qual cidade você residia antes de ingressar no IFCE?"
        value={formData.cidadeAntes}
        onChange={onInputChange}
        placeholder="Digite a cidade"
        required
        validationType="lettersAndSpaces"
      />

      <FormField
        type="text"
        id="estadoAtual"
        name="estadoAtual"
        label="Em qual estado você reside atualmente?"
        value={formData.estadoAtual}
        onChange={onInputChange}
        placeholder="Digite o estado"
        required
        validationType="lettersAndSpaces"
      />

      <FormField
        type="text"
        id="cidadeAtual"
        name="cidadeAtual"
        label="Em qual cidade você reside atualmente?"
        value={formData.cidadeAtual}
        onChange={onInputChange}
        placeholder="Digite a cidade"
        required
        validationType="lettersAndSpaces"
      />

      <FormField
        type="select"
        id="cursoConcluido"
        name="cursoConcluido"
        label="Qual curso você concluiu no IFCE?"
        value={formData.cursoConcluido}
        onChange={onInputChange}
        options={CURSO_OPTIONS}
        required
      />
    </>
  );
};

export default AcaoAfirmativaLocalizacao;
