import React from 'react';
import DadosPessoais from './pages/DadosPessoais';
import AcaoAfirmativaLocalizacao from './pages/AcaoAfirmativaLocalizacao';
import FormacaoBolsas from './pages/FormacaoBolsas';
import ExperienciaProfissional from './pages/ExperienciaProfissional';
import AvaliacaoFormacao from './pages/AvaliacaoFormacao';
import AvaliacaoCurso from './pages/AvaliacaoCurso';
import ExperienciaAcademica from './pages/ExperienciaAcademica';
import Finalizacao from './pages/Finalizacao';

const FormPage = ({ currentPage, formData, onInputChange }) => {
  const props = { formData, onInputChange };

  switch (currentPage) {
    case 0:
      return <DadosPessoais {...props} />;
    case 1:
      return <AcaoAfirmativaLocalizacao {...props} />;
    case 2:
      return <FormacaoBolsas {...props} />;
    case 3:
      return <ExperienciaProfissional {...props} />;
    case 4:
      return <AvaliacaoFormacao {...props} />;
    case 5:
      return <AvaliacaoCurso {...props} />;
    case 6:
      return <ExperienciaAcademica {...props} />;
    case 7:
      return <Finalizacao {...props} />;
    default:
      return null;
  }
};

export default FormPage;
