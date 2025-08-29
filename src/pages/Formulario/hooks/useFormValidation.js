export const useFormValidation = (formData, currentPage) => {
  const validateCurrentPage = () => {
    switch (currentPage) {
      case 0: // Dados Pessoais
        return (
          formData.nomeCompleto?.trim() &&
          formData.email?.trim() &&
          formData.telefone?.trim() &&
          formData.genero &&
          formData.etnia &&
          formData.faixaEtaria
        );
      
      case 1: // Ação Afirmativa e Localização
        const acaoAfirmativaValid = formData.acaoAfirmativa;
        const acaoAfirmativaTipoValid = formData.acaoAfirmativa === 'Sim' ? 
          formData.acaoAfirmativaTipo?.trim() : true;
        
        return (
          acaoAfirmativaValid &&
          acaoAfirmativaTipoValid &&
          formData.estadoAntes?.trim() &&
          formData.cidadeAntes?.trim() &&
          formData.estadoAtual?.trim() &&
          formData.cidadeAtual?.trim() &&
          formData.cursoConcluido
        );
      
      case 2: // Formação e Bolsas
        const auxilioGraduacaoValid = formData.auxilioGraduacao;
        const tipoAuxilioValid = formData.auxilioGraduacao === 'Sim' ? 
          formData.tipoAuxilio?.trim() : true;
        const posGraduacaoValid = formData.posGraduacao;
        const tipoPosGraduacaoValid = ['Fiz especialização', 'Fiz mestrado', 'Fiz doutorado', 'Fiz pós-doutorado'].includes(formData.posGraduacao) ? 
          formData.tipoPosGraduacao?.trim() : true;
        
        return (
          auxilioGraduacaoValid &&
          tipoAuxilioValid &&
          posGraduacaoValid &&
          tipoPosGraduacaoValid &&
          formData.bolsista?.trim()
        );
      
      case 3: // Experiência Profissional
        const empregadoValid = formData.empregado;
        const motivoNaoEmpregadoValid = formData.empregado === 'Não' ? 
          formData.motivoNaoEmpregado?.trim() : true;
        const modalidadeTrabalhoValid = formData.empregado === 'Sim' ? 
          formData.modalidadeTrabalho : true;
        const atividadeProfissionalValid = formData.empregado === 'Sim' ? 
          formData.atividadeProfissional?.trim() : true;
        
        return (
          empregadoValid &&
          motivoNaoEmpregadoValid &&
          modalidadeTrabalhoValid &&
          formData.tempoPrimeiroEmprego &&
          formData.faixaSalarial &&
          atividadeProfissionalValid
        );
      
      case 4: // Avaliação da Formação
        return (
          formData.contribuiuMercado &&
          formData.contribuiuExercicio &&
          formData.contribuiuSalario &&
          formData.contribuiuAscensao &&
          formData.melhorouCondicao &&
          formData.satisfacaoPessoal &&
          formData.construiuCarreira
        );
      
      case 5: // Sugestões e Avaliação do Curso
        return (
          formData.conhecimentosEssenciais?.trim() &&
          formData.qualidadeCurso &&
          formData.corpoDocente &&
          formData.metodosAvaliativos &&
          formData.coordenacao &&
          formData.infraestrutura &&
          formData.teoriaPratica &&
          formData.dominioConteudos &&
          formData.metodologias &&
          formData.estimuloAprendizado
        );
      
      case 6: // Experiência Acadêmica
        return (
          formData.buscaNovosConhecimentos &&
          formData.ambienteAcademico &&
          formData.problemasPsicologicos &&
          formData.dificuldadesMateriais
        );
      
      default:
        return true;
    }
  };

  return { validateCurrentPage };
};
