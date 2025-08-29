import React from 'react';
import FormField from '../common/FormField';
import { CONCORDANCIA_OPTIONS } from '../../constants/formOptions';

const ExperienciaAcademica = ({ formData, onInputChange }) => {
  return (
    <>
      <h2 className="page-title">Experiência Acadêmica</h2>
      
      <p className="page-description">
        Avalie sua experiência durante o período acadêmico no IFCE:
      </p>
      
      <FormField
        type="select"
        id="buscaNovosConhecimentos"
        name="buscaNovosConhecimentos"
        label="O curso estimulou você a buscar novos conhecimentos?"
        value={formData.buscaNovosConhecimentos}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="ambienteAcademico"
        name="ambienteAcademico"
        label="O ambiente acadêmico foi propício para seu desenvolvimento?"
        value={formData.ambienteAcademico}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="problemasPsicologicos"
        name="problemasPsicologicos"
        label="Durante o curso, você enfrentou problemas psicológicos ou emocionais?"
        value={formData.problemasPsicologicos}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="dificuldadesMateriais"
        name="dificuldadesMateriais"
        label="Durante o curso, você enfrentou dificuldades materiais ou financeiras?"
        value={formData.dificuldadesMateriais}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />
    </>
  );
};

export default ExperienciaAcademica;
