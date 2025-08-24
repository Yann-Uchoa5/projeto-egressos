import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './detalhesEgresso.css';

const DetalhesEgresso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [egresso, setEgresso] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dados mockados baseados no formulário real
  useEffect(() => {
    // Simulando busca dos dados do egresso
    const mockEgresso = {
      id: id,
      nome: "Yan Uchoa Da Silva",
      curso: "Análise e Desenvolvimento de Sistemas",
      email: "yan@gmail.com",
      respostas: {
        // Dados Pessoais
        dadosPessoais: {
          nomeCompleto: "Yan Uchoa Da Silva",
          email: "yan@gmail.com",
          genero: "Masculino",
          etnia: "Pardo",
          faixaEtaria: "26-35 anos"
        },
        // Ação Afirmativa e Localização
        acaoAfirmativa: {
          acaoAfirmativa: "Não",
          acaoAfirmativaTipo: "-",
          estadoAntes: "CE",
          cidadeAntes: "BOA VIAGEM",
          estadoAtual: "CE",
          cidadeAtual: "FORTALEZA",
          cursoConcluido: "Análise e Desenvolvimento de Sistemas"
        },
        // Formação e Bolsas
        formacaoBolsas: {
          auxilioGraduacao: "Sim",
          tipoAuxilio: "Bolsa de Iniciação Científica",
          posGraduacao: "Fiz especialização",
          bolsista: "Bolsa de Iniciação Científica - Setor de Pesquisa"
        },
        // Experiência Profissional
        experienciaProfissional: {
          empregado: "Sim",
          motivoNaoEmpregado: "-",
          tempoPrimeiroEmprego: "Menos de 6 meses",
          faixaSalarial: "3 a 5 salários mínimos",
          atividadeProfissional: "DESENVOLVEDOR FULL STACK"
        },
        // Avaliação da Formação
        avaliacaoFormacao: {
          contribuiuMercado: "Excelente",
          contribuiuExercicio: "Muito Bom",
          contribuiuSalario: "Excelente",
          contribuiuAscensao: "Muito Bom",
          melhorouCondicao: "Excelente",
          satisfacaoPessoal: "Muito Bom",
          construiuCarreira: "Excelente"
        },
        // Sugestões e Avaliação do Curso
        avaliacaoCurso: {
          conhecimentosEssenciais: "Programação orientada a objetos, frameworks modernos como React e Node.js, metodologias ágeis e DevOps seriam conhecimentos essenciais para incluir no curso.",
          qualidadeCurso: "Excelente",
          corpoDocente: "Muito Bom",
          metodosAvaliativos: "Bom",
          coordenacao: "Excelente",
          infraestrutura: "Muito Bom",
          teoriaPratica: "Excelente",
          dominioConteudos: "Muito Bom",
          metodologias: "Bom",
          estimuloAprendizado: "Excelente"
        },
        // Experiência Acadêmica
        experienciaAcademica: {
          buscaNovosConhecimentos: "Concordo Totalmente",
          ambienteAcademico: "Concordo Totalmente",
          problemasPsicologicos: "Discordo",
          dificuldadesMateriais: "Discordo"
        }
      }
    };

    setTimeout(() => {
      setEgresso(mockEgresso);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleVoltar = () => {
    navigate('/respostas');
  };

  if (loading) {
    return (
      <div className="detalhes-container">
        <div className="loading">Carregando...</div>
      </div>
    );
  }

  if (!egresso) {
    return (
      <div className="detalhes-container">
        <div className="error">Egresso não encontrado</div>
      </div>
    );
  }

  return (
    <div className="detalhes-container">
      {/* Header verde com informações do coordenador */}
      <header className="coordenador-header">
        <div className="header-content">
          <button onClick={handleVoltar} className="voltar-btn">
            ← Voltar
          </button>
          <div className="coordenador-info">
            <div className="avatar">
              <span>T</span>
            </div>
            <div className="user-details">
              <span className="user-name">Tales</span>
              <span className="user-role">Coordenador</span>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        <div className="content-wrapper">
          <div className="header-section">
            <h1 className="page-title">Detalhes do Egresso</h1>
            <div className="egresso-basic-info">
              <h2>{egresso.nome}</h2>
              <p><strong>Curso:</strong> {egresso.curso}</p>
            </div>
          </div>

          {/* Seções de informações */}
          <div className="info-sections">
            
            {/* Dados Pessoais */}
            <section className="info-section">
              <h3 className="section-title">Dados Pessoais</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Nome Completo:</label>
                  <span>{egresso.respostas.dadosPessoais.nomeCompleto}</span>
                </div>
                <div className="info-item">
                  <label>E-mail:</label>
                  <span>{egresso.respostas.dadosPessoais.email}</span>
                </div>
                <div className="info-item">
                  <label>Gênero:</label>
                  <span>{egresso.respostas.dadosPessoais.genero}</span>
                </div>
                <div className="info-item">
                  <label>Etnia:</label>
                  <span>{egresso.respostas.dadosPessoais.etnia}</span>
                </div>
                <div className="info-item">
                  <label>Faixa Etária:</label>
                  <span>{egresso.respostas.dadosPessoais.faixaEtaria}</span>
                </div>
              </div>
            </section>

            {/* Ação Afirmativa e Localização */}
            <section className="info-section">
              <h3 className="section-title">Ação Afirmativa e Localização</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Ação Afirmativa:</label>
                  <span>{egresso.respostas.acaoAfirmativa.acaoAfirmativa}</span>
                </div>
                {egresso.respostas.acaoAfirmativa.acaoAfirmativa === "Sim" && (
                  <div className="info-item">
                    <label>Tipo de Ação:</label>
                    <span>{egresso.respostas.acaoAfirmativa.acaoAfirmativaTipo}</span>
                  </div>
                )}
                <div className="info-item">
                  <label>Estado Antes do IFCE:</label>
                  <span>{egresso.respostas.acaoAfirmativa.estadoAntes}</span>
                </div>
                <div className="info-item">
                  <label>Cidade Antes do IFCE:</label>
                  <span>{egresso.respostas.acaoAfirmativa.cidadeAntes}</span>
                </div>
                <div className="info-item">
                  <label>Estado Atual:</label>
                  <span>{egresso.respostas.acaoAfirmativa.estadoAtual}</span>
                </div>
                <div className="info-item">
                  <label>Cidade Atual:</label>
                  <span>{egresso.respostas.acaoAfirmativa.cidadeAtual}</span>
                </div>
                <div className="info-item">
                  <label>Curso Concluído:</label>
                  <span>{egresso.respostas.acaoAfirmativa.cursoConcluido}</span>
                </div>
              </div>
            </section>

            {/* Formação e Bolsas */}
            <section className="info-section">
              <h3 className="section-title">Formação e Bolsas</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Auxílio na Graduação:</label>
                  <span>{egresso.respostas.formacaoBolsas.auxilioGraduacao}</span>
                </div>
                {egresso.respostas.formacaoBolsas.auxilioGraduacao === "Sim" && (
                  <div className="info-item">
                    <label>Tipo de Auxílio:</label>
                    <span>{egresso.respostas.formacaoBolsas.tipoAuxilio}</span>
                  </div>
                )}
                <div className="info-item">
                  <label>Pós-Graduação:</label>
                  <span>{egresso.respostas.formacaoBolsas.posGraduacao}</span>
                </div>
                <div className="info-item">
                  <label>Bolsista:</label>
                  <span>{egresso.respostas.formacaoBolsas.bolsista}</span>
                </div>
              </div>
            </section>

            {/* Experiência Profissional */}
            <section className="info-section">
              <h3 className="section-title">Experiência Profissional</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Empregado Atualmente:</label>
                  <span>{egresso.respostas.experienciaProfissional.empregado}</span>
                </div>
                {egresso.respostas.experienciaProfissional.empregado === "Não" && (
                  <div className="info-item full-width">
                    <label>Motivo de Não Estar Empregado:</label>
                    <span>{egresso.respostas.experienciaProfissional.motivoNaoEmpregado}</span>
                  </div>
                )}
                <div className="info-item">
                  <label>Tempo para Primeiro Emprego:</label>
                  <span>{egresso.respostas.experienciaProfissional.tempoPrimeiroEmprego}</span>
                </div>
                <div className="info-item">
                  <label>Faixa Salarial:</label>
                  <span>{egresso.respostas.experienciaProfissional.faixaSalarial}</span>
                </div>
                <div className="info-item">
                  <label>Atividade Profissional:</label>
                  <span>{egresso.respostas.experienciaProfissional.atividadeProfissional}</span>
                </div>
              </div>
            </section>

            {/* Avaliação da Formação */}
            <section className="info-section">
              <h3 className="section-title">Avaliação da Formação</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Contribuiu para Inserção no Mercado:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoFormacao.contribuiuMercado}</span>
                </div>
                <div className="info-item">
                  <label>Contribuiu para Exercício Profissional:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoFormacao.contribuiuExercicio}</span>
                </div>
                <div className="info-item">
                  <label>Contribuiu para Salário Compatível:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoFormacao.contribuiuSalario}</span>
                </div>
                <div className="info-item">
                  <label>Contribuiu para Ascensão Social:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoFormacao.contribuiuAscensao}</span>
                </div>
                <div className="info-item">
                  <label>Melhorou Condição Socioeconômica:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoFormacao.melhorouCondicao}</span>
                </div>
                <div className="info-item">
                  <label>Contribuiu para Satisfação Pessoal:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoFormacao.satisfacaoPessoal}</span>
                </div>
                <div className="info-item">
                  <label>Contribuiu para Construir Carreira:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoFormacao.construiuCarreira}</span>
                </div>
              </div>
            </section>

            {/* Avaliação do Curso */}
            <section className="info-section">
              <h3 className="section-title">Avaliação do Curso</h3>
              <div className="info-grid">
                <div className="info-item full-width">
                  <label>Conhecimentos Essenciais para Inclusão:</label>
                  <span>{egresso.respostas.avaliacaoCurso.conhecimentosEssenciais}</span>
                </div>
                <div className="info-item">
                  <label>Qualidade do Curso:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoCurso.qualidadeCurso}</span>
                </div>
                <div className="info-item">
                  <label>Corpo Docente:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoCurso.corpoDocente}</span>
                </div>
                <div className="info-item">
                  <label>Métodos Avaliativos:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoCurso.metodosAvaliativos}</span>
                </div>
                <div className="info-item">
                  <label>Coordenação:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoCurso.coordenacao}</span>
                </div>
                <div className="info-item">
                  <label>Infraestrutura:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoCurso.infraestrutura}</span>
                </div>
                <div className="info-item">
                  <label>Teoria e Prática:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoCurso.teoriaPratica}</span>
                </div>
                <div className="info-item">
                  <label>Domínio dos Conteúdos:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoCurso.dominioConteudos}</span>
                </div>
                <div className="info-item">
                  <label>Metodologias:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoCurso.metodologias}</span>
                </div>
                <div className="info-item">
                  <label>Estímulo para Aprendizado:</label>
                  <span className="avaliacao">{egresso.respostas.avaliacaoCurso.estimuloAprendizado}</span>
                </div>
              </div>
            </section>

            {/* Experiência Acadêmica */}
            <section className="info-section">
              <h3 className="section-title">Experiência Acadêmica</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Busca Novos Conhecimentos:</label>
                  <span>{egresso.respostas.experienciaAcademica.buscaNovosConhecimentos}</span>
                </div>
                <div className="info-item">
                  <label>Ambiente Acadêmico:</label>
                  <span>{egresso.respostas.experienciaAcademica.ambienteAcademico}</span>
                </div>
                <div className="info-item">
                  <label>Problemas Psicológicos:</label>
                  <span>{egresso.respostas.experienciaAcademica.problemasPsicologicos}</span>
                </div>
                <div className="info-item">
                  <label>Dificuldades Materiais:</label>
                  <span>{egresso.respostas.experienciaAcademica.dificuldadesMateriais}</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default DetalhesEgresso;
