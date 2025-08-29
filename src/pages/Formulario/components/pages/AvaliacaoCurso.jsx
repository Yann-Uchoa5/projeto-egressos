import React from 'react';
import FormField from '../common/FormField';
import { AVALIACAO_OPTIONS } from '../../constants/formOptions';

const AvaliacaoCurso = ({ formData, onInputChange }) => {
  return (
    <>
      <h2 className="page-title">Sugestões e Avaliação do Curso</h2>
      
      <p className="page-description">
        Avalie diferentes aspectos do curso que você concluiu no IFCE:
      </p>
      
      <FormField
        type="textarea"
        id="conhecimentosEssenciais"
        name="conhecimentosEssenciais"
        label="Quais conhecimentos você considera essenciais para sua área de atuação que não foram abordados no curso?"
        value={formData.conhecimentosEssenciais}
        onChange={onInputChange}
        placeholder="Descreva os conhecimentos que considera importantes"
        required
        validationType="lettersAndSpaces"
      />

      <FormField
        type="select"
        id="qualidadeCurso"
        name="qualidadeCurso"
        label="Como você avalia a qualidade geral do curso?"
        value={formData.qualidadeCurso}
        onChange={onInputChange}
        options={AVALIACAO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="corpoDocente"
        name="corpoDocente"
        label="Como você avalia a qualidade do corpo docente?"
        value={formData.corpoDocente}
        onChange={onInputChange}
        options={AVALIACAO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="metodosAvaliativos"
        name="metodosAvaliativos"
        label="Como você avalia os métodos avaliativos utilizados?"
        value={formData.metodosAvaliativos}
        onChange={onInputChange}
        options={AVALIACAO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="coordenacao"
        name="coordenacao"
        label="Como você avalia a coordenação do curso?"
        value={formData.coordenacao}
        onChange={onInputChange}
        options={AVALIACAO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="infraestrutura"
        name="infraestrutura"
        label="Como você avalia a infraestrutura disponibilizada?"
        value={formData.infraestrutura}
        onChange={onInputChange}
        options={AVALIACAO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="teoriaPratica"
        name="teoriaPratica"
        label="Como você avalia o equilíbrio entre teoria e prática no curso?"
        value={formData.teoriaPratica}
        onChange={onInputChange}
        options={AVALIACAO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="dominioConteudos"
        name="dominioConteudos"
        label="Como você avalia o domínio dos conteúdos pelos professores?"
        value={formData.dominioConteudos}
        onChange={onInputChange}
        options={AVALIACAO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="metodologias"
        name="metodologias"
        label="Como você avalia as metodologias de ensino utilizadas?"
        value={formData.metodologias}
        onChange={onInputChange}
        options={AVALIACAO_OPTIONS}
        required
      />

      <FormField
        type="select"
        id="estimuloAprendizado"
        name="estimuloAprendizado"
        label="Como você avalia o estímulo ao aprendizado e desenvolvimento de competências?"
        value={formData.estimuloAprendizado}
        onChange={onInputChange}
        options={AVALIACAO_OPTIONS}
        required
      />
    </>
  );
};

export default AvaliacaoCurso;
