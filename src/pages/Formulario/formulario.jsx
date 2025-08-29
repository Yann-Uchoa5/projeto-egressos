import React, { useState } from 'react';
import HeaderFormulario from '../../components/HeaderFormulario';
import ProgressBar from './components/ProgressBar';
import FormPage from './components/FormPage';
import FormNavigation from './components/FormNavigation';
import { useFormValidation } from './hooks/useFormValidation';
import { useFormProgress } from './hooks/useFormProgress';
import './formulario.css';

const Formulario = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nomeCompleto: '',
    email: '',
    telefone: '',
    genero: '',
    etnia: '',
    faixaEtaria: '',
    acaoAfirmativa: '',
    acaoAfirmativaTipo: '',
    estadoAntes: '',
    cidadeAntes: '',
    estadoAtual: '',
    cidadeAtual: '',
    cursoConcluido: '',
    
    // Formação e Bolsas
    auxilioGraduacao: '',
    tipoAuxilio: '',
    posGraduacao: '',
    tipoPosGraduacao: '',
    bolsista: '',
    
    // Profissional
    empregado: '',
    motivoNaoEmpregado: '',
    modalidadeTrabalho: '',
    tempoPrimeiroEmprego: '',
    faixaSalarial: '',
    atividadeProfissional: '',
    
    // Avaliação da Formação
    contribuiuMercado: '',
    contribuiuExercicio: '',
    contribuiuSalario: '',
    contribuiuAscensao: '',
    melhorouCondicao: '',
    satisfacaoPessoal: '',
    construiuCarreira: '',
    
    // Sugestões e Avaliação do Curso
    conhecimentosEssenciais: '',
    qualidadeCurso: '',
    corpoDocente: '',
    metodosAvaliativos: '',
    coordenacao: '',
    infraestrutura: '',
    teoriaPratica: '',
    dominioConteudos: '',
    metodologias: '',
    estimuloAprendizado: '',
    
    // Experiência Acadêmica
    buscaNovosConhecimentos: '',
    ambienteAcademico: '',
    problemasPsicologicos: '',
    dificuldadesMateriais: '',
    
    // Confirmação
    aceitaUsoDados: false
  });

  const { validateCurrentPage } = useFormValidation(formData, currentPage);
  const { progress } = useFormProgress(formData, currentPage);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (!validateCurrentPage()) {
      alert('Por favor, preencha todos os campos obrigatórios antes de continuar.');
      return;
    }
    
    if (currentPage < 7) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.aceitaUsoDados) {
      alert('É necessário confirmar o uso dos seus dados para prosseguir com o envio do formulário.');
      return;
    }
    
    try {
      const payload = buildPayload(formData);
      const response = await submitForm(payload);
      
      if (response.success) {
        alert('Formulário enviado com sucesso!');
        setCurrentPage(7);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error(error);
      alert('Não foi possível enviar o formulário. Tente novamente.');
    }
  };

  return (
    <div className="formulario-container">
      <HeaderFormulario />
      <main className="formulario-main">
        <div className="formulario-content">
          <h1 className="formulario-title">Pesquisa com Egressos IFCE</h1>
          
          <p className="formulario-description">
            Este formulário faz parte da Pesquisa de Acompanhamento de Egressos do IFCE/Campus Boa Viagem, 
            destinada aos egressos dos cursos técnicos e superiores. Suas respostas serão tratadas com 
            confidencialidade e utilizadas para avaliação e melhoria dos nossos cursos. 
            Agradecemos sua participação! Pro-Reitoria de Extensão e equipe do projeto.
          </p>
          
          <ProgressBar 
            progress={progress}
            currentPage={currentPage}
          />
          
          <form className="formulario-form" onSubmit={handleSubmit}>
            <FormPage 
              currentPage={currentPage}
              formData={formData}
              onInputChange={handleInputChange}
            />
            
            <FormNavigation 
              currentPage={currentPage}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </form>
        </div>
      </main>
    </div>
  );
};

// Funções auxiliares
const buildPayload = (formData) => ({
  nome: formData.nomeCompleto,
  email: formData.email,
  telefone: formData.telefone,
  curso: formData.cursoConcluido,
  dados_pessoais: {
    nomeCompleto: formData.nomeCompleto,
    email: formData.email,
    telefone: formData.telefone,
    genero: formData.genero,
    etnia: formData.etnia,
    faixaEtaria: formData.faixaEtaria,
  },
  acao_afirmativa: {
    acaoAfirmativa: formData.acaoAfirmativa,
    acaoAfirmativaTipo: formData.acaoAfirmativaTipo,
    estadoAntes: formData.estadoAntes,
    cidadeAntes: formData.cidadeAntes,
    estadoAtual: formData.estadoAtual,
    cidadeAtual: formData.cidadeAtual,
    cursoConcluido: formData.cursoConcluido,
  },
  formacao_bolsas: {
    auxilioGraduacao: formData.auxilioGraduacao,
    tipoAuxilio: formData.tipoAuxilio,
    posGraduacao: formData.posGraduacao,
    tipoPosGraduacao: formData.tipoPosGraduacao,
    bolsista: formData.bolsista,
  },
  experiencia_profissional: {
    empregado: formData.empregado,
    motivoNaoEmpregado: formData.motivoNaoEmpregado,
    modalidadeTrabalho: formData.modalidadeTrabalho,
    tempoPrimeiroEmprego: formData.tempoPrimeiroEmprego,
    faixaSalarial: formData.faixaSalarial,
    atividadeProfissional: formData.atividadeProfissional,
  },
  avaliacao_formacao: {
    contribuiuMercado: formData.contribuiuMercado,
    contribuiuExercicio: formData.contribuiuExercicio,
    contribuiuSalario: formData.contribuiuSalario,
    contribuiuAscensao: formData.contribuiuAscensao,
    melhorouCondicao: formData.melhorouCondicao,
    satisfacaoPessoal: formData.satisfacaoPessoal,
    construiuCarreira: formData.construiuCarreira,
  },
  avaliacao_curso: {
    conhecimentosEssenciais: formData.conhecimentosEssenciais,
    qualidadeCurso: formData.qualidadeCurso,
    corpoDocente: formData.corpoDocente,
    metodosAvaliativos: formData.metodosAvaliativos,
    coordenacao: formData.coordenacao,
    infraestrutura: formData.infraestrutura,
    teoriaPratica: formData.teoriaPratica,
    dominioConteudos: formData.dominioConteudos,
    metodologias: formData.metodologias,
    estimuloAprendizado: formData.estimuloAprendizado,
  },
  experiencia_academica: {
    buscaNovosConhecimentos: formData.buscaNovosConhecimentos,
    ambienteAcademico: formData.ambienteAcademico,
    problemasPsicologicos: formData.problemasPsicologicos,
    dificuldadesMateriais: formData.dificuldadesMateriais,
  },
});

const submitForm = async (payload) => {
  const res = await fetch('http://localhost:8000/api/v1/formularios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || 'Erro ao enviar formulário');
  }
  
  const data = await res.json();
  console.log('Formulário salvo:', data);
  return { success: true, data };
};

export default Formulario;