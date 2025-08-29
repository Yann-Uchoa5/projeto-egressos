import React from 'react';
import FormField from '../common/FormField';
import { CONCORDANCIA_OPTIONS } from '../../constants/formOptions';

const AvaliacaoFormacao = ({ formData, onInputChange }) => {
  return (
    <>
      <h2 className="page-title">Avaliação da Formação</h2>
      
      <p className="page-description">
        Avalie como a formação no IFCE contribuiu para sua vida profissional e pessoal:
      </p>
      
      <FormField
        type="select"
        id="contribuiuMercado"
        name="contribuiuMercado"
        label="A formação no IFCE contribuiu para sua inserção no mercado de trabalho?"
        value={formData.contribuiuMercado}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="contribuiuExercicio"
        name="contribuiuExercicio"
        label="A formação no IFCE contribuiu para o exercício da sua profissão?"
        value={formData.contribuiuExercicio}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="contribuiuSalario"
        name="contribuiuSalario"
        label="A formação no IFCE contribuiu para melhorar sua remuneração?"
        value={formData.contribuiuSalario}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="contribuiuAscensao"
        name="contribuiuAscensao"
        label="A formação no IFCE contribuiu para sua ascensão profissional?"
        value={formData.contribuiuAscensao}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="melhorouCondicao"
        name="melhorouCondicao"
        label="A formação no IFCE melhorou suas condições de vida?"
        value={formData.melhorouCondicao}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="satisfacaoPessoal"
        name="satisfacaoPessoal"
        label="A formação no IFCE proporcionou satisfação pessoal?"
        value={formData.satisfacaoPessoal}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="construiuCarreira"
        name="construiuCarreira"
        label="A formação no IFCE ajudou você a construir uma carreira sólida?"
        value={formData.construiuCarreira}
        onChange={onInputChange}
        options={CONCORDANCIA_OPTIONS}
        required
      />
    </>
  );
};

export default AvaliacaoFormacao;
