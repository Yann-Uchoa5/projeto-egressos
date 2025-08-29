import React from 'react';
import FormField from '../common/FormField';
import { SIM_NAO_OPTIONS, POS_GRADUACAO_OPTIONS } from '../../constants/formOptions';

const FormacaoBolsas = ({ formData, onInputChange }) => {
  return (
    <>
      <h2 className="page-title">Formação e Bolsas</h2>
      
      <FormField
        type="select"
        id="auxilioGraduacao"
        name="auxilioGraduacao"
        label="Durante a graduação, você recebeu algum tipo de auxílio financeiro?"
        value={formData.auxilioGraduacao}
        onChange={onInputChange}
        options={SIM_NAO_OPTIONS}
        required
      />

      {formData.auxilioGraduacao === 'Sim' && (
        <FormField
          type="text"
          id="tipoAuxilio"
          name="tipoAuxilio"
          label="Qual tipo de auxílio?"
          value={formData.tipoAuxilio}
          onChange={onInputChange}
          placeholder="Ex: Bolsa PIBIC, FAP, etc."
          required
          validationType="lettersAndSpaces"
        />
      )}

      <FormField
        type="select"
        id="posGraduacao"
        name="posGraduacao"
        label="Após a conclusão do curso, você fez alguma pós-graduação?"
        value={formData.posGraduacao}
        onChange={onInputChange}
        options={POS_GRADUACAO_OPTIONS}
        required
      />

      {['Fiz especialização', 'Fiz mestrado', 'Fiz doutorado', 'Fiz pós-doutorado'].includes(formData.posGraduacao) && (
        <FormField
          type="text"
          id="tipoPosGraduacao"
          name="tipoPosGraduacao"
          label="Qual o nome da pós-graduação?"
          value={formData.tipoPosGraduacao}
          onChange={onInputChange}
          placeholder="Digite o nome da pós-graduação"
          required
          validationType="lettersAndSpaces"
        />
      )}

      <FormField
        type="text"
        id="bolsista"
        name="bolsista"
        label="Você foi bolsista em algum momento da sua formação?"
        value={formData.bolsista}
        onChange={onInputChange}
        placeholder="Descreva sua experiência como bolsista"
        required
        validationType="lettersAndSpaces"
      />
    </>
  );
};

export default FormacaoBolsas;
