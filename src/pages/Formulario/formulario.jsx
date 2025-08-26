import React, { useState } from 'react';
import HeaderFormulario from '../../components/HeaderFormulario';
import './formulario.css';

const Formulario = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nome: '',
    email: '',
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
    dificuldadesMateriais: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
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
    const payload = {
      nome: formData.nomeCompleto,
      email: formData.email,
      curso: formData.cursoConcluido,
      dados_pessoais: {
        nomeCompleto: formData.nomeCompleto,
        email: formData.email,
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
    };

    try {
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
      alert('Formulário enviado com sucesso!');
      setCurrentPage(7);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error(error);
      alert('Não foi possível enviar o formulário. Tente novamente.');
    }
  };

  const progress = ((currentPage + 1) / 8) * 100;

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <>
            <h2 className="page-title">Dados Pessoais</h2>
            <div className="form-group">
              <label htmlFor="nomeCompleto" className="form-label">Nome completo</label>
              <input
              type="text"
              id="nomeCompleto"
              name="nomeCompleto"
              value={formData.nomeCompleto}
              className="form-input"
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              required
            />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail principal</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="genero" className="form-label">
                Qual sua identidade de gênero?
              </label>
              <select
                id="genero"
                name="genero"
                value={formData.genero}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Não-binário">Não-binário</option>
                <option value="Outro">Outro</option>
                <option value="Prefere não informar">Prefere não informar</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="etnia" className="form-label">
                Considerando sua identidade etnico-racial, como você se autodeclara?
              </label>
              <select
                id="etnia"
                name="etnia"
                value={formData.etnia}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Branco">Branco</option>
                <option value="Preto">Preto</option>
                <option value="Pardo">Pardo</option>
                <option value="Amarelo">Amarelo</option>
                <option value="Indígena">Indígena</option>
                <option value="Prefere não informar">Prefere não informar</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="faixaEtaria" className="form-label">Qual sua faixa-etária?</label>
              <select
                id="faixaEtaria"
                name="faixaEtaria"
                value={formData.faixaEtaria}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="18-25 anos">18-25 anos</option>
                <option value="26-35 anos">26-35 anos</option>
                <option value="36-45 anos">36-45 anos</option>
                <option value="46-55 anos">46-55 anos</option>
                <option value="56 anos ou mais">56 anos ou mais</option>
              </select>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="page-title">Ação Afirmativa e Localização</h2>
            <div className="form-group">
              <label htmlFor="acaoAfirmativa" className="form-label">
                Você ingressou na universidade por meio de alguma política de ação afirmativa?
              </label>
              <select
                id="acaoAfirmativa"
                name="acaoAfirmativa"
                value={formData.acaoAfirmativa}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
            {formData.acaoAfirmativa === 'Sim' && (
              <div className="form-group">
                <label htmlFor="acaoAfirmativaTipo" className="form-label">
                  Em caso afirmativo, por favor, informe qual ação:
                </label>
                <input
                  type="text"
                  id="acaoAfirmativaTipo"
                  name="acaoAfirmativaTipo"
                  value={formData.acaoAfirmativaTipo}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Digite o tipo de ação afirmativa"
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="estadoAntes" className="form-label">
                Estado que você residia antes de ingressar no IFCE?
              </label>
              <input
                type="text"
                id="estadoAntes"
                name="estadoAntes"
                value={formData.estadoAntes}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Digite o estado"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cidadeAntes" className="form-label">
                Cidade que você residia antes de ingressar no IFCE?
              </label>
              <input
                type="text"
                id="cidadeAntes"
                name="cidadeAntes"
                value={formData.cidadeAntes}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Digite em CAIXA ALTA (ex: BOA VIAGEM)"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="estadoAtual" className="form-label">
                Estado onde reside atualmente?
              </label>
              <input
                type="text"
                id="estadoAtual"
                name="estadoAtual"
                value={formData.estadoAtual}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Digite o estado atual"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cidadeAtual" className="form-label">
                Cidade que você reside atualmente?
              </label>
              <input
                type="text"
                id="cidadeAtual"
                name="cidadeAtual"
                value={formData.cidadeAtual}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Digite em CAIXA ALTA (ex: BOA VIAGEM)"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cursoConcluido" className="form-label">
                Qual curso você concluiu no IFCE?
              </label>
              <select
                id="cursoConcluido"
                name="cursoConcluido"
                value={formData.cursoConcluido}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Téc. em Redes de Computadores">Téc. em Redes de Computadores</option>
                <option value="Téc. em Agropecuária">Téc. em Agropecuária</option>
                <option value="Agropecuária Subsequente">Agropecuária Subsequente</option>
                <option value="Zootecnia">Zootecnia</option>
                <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                <option value="Licenciatura em Química">Licenciatura em Química</option>
              </select>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="page-title">Formação e Bolsas</h2>
            <div className="form-group">
              <label htmlFor="auxilioGraduacao" className="form-label">
                Durante o período da graduação, você recebeu algum tipo de auxílio?
              </label>
              <select
                id="auxilioGraduacao"
                name="auxilioGraduacao"
                value={formData.auxilioGraduacao}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
            {formData.auxilioGraduacao === 'Sim' && (
              <div className="form-group">
                <label htmlFor="tipoAuxilio" className="form-label">
                  Qual tipo de auxílio você recebeu?
                </label>
                <input
                  type="text"
                  id="tipoAuxilio"
                  name="tipoAuxilio"
                  value={formData.tipoAuxilio}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Descreva o tipo de auxílio"
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="posGraduacao" className="form-label">
                Após a conclusão do curso no IFCE, você:
              </label>
              <select
                id="posGraduacao"
                name="posGraduacao"
                value={formData.posGraduacao}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Não fiz pós-graduação">Não fiz pós-graduação</option>
                <option value="Fiz especialização">Fiz especialização</option>
                <option value="Fiz mestrado">Fiz mestrado</option>
                <option value="Fiz doutorado">Fiz doutorado</option>
                <option value="Fiz pós-doutorado">Fiz pós-doutorado</option>
              </select>
            </div>
            {['Fiz especialização', 'Fiz mestrado', 'Fiz doutorado', 'Fiz pós-doutorado'].includes(formData.posGraduacao) && (
              <div className="form-group">
                <label htmlFor="tipoPosGraduacao" className="form-label">
                  Qual tipo de pós-graduação você fez?
                </label>
                <input
                  type="text"
                  id="tipoPosGraduacao"
                  name="tipoPosGraduacao"
                  value={formData.tipoPosGraduacao}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Descreva a pós-graduação"
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="bolsista" className="form-label">
                Se em algum momento da graduação no IFCE você foi bolsista, informe o tipo de bolsa e o setor?
              </label>
              <input
                type="text"
                id="bolsista"
                name="bolsista"
                value={formData.bolsista}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Descreva o tipo de bolsa e setor"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="page-title">Experiência Profissional</h2>
            <div className="form-group">
              <label htmlFor="empregado" className="form-label">
                Você exerce atividade profissional remunerada atualmente?
              </label>
              <select
                id="empregado"
                name="empregado"
                value={formData.empregado}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
            {formData.empregado === 'Não' && (
              <div className="form-group">
                <label htmlFor="motivoNaoEmpregado" className="form-label">
                  Caso não esteja empregado na sua área de formação descreva o(os) motivo(os):
                </label>
                <textarea
                  id="motivoNaoEmpregado"
                  name="motivoNaoEmpregado"
                  value={formData.motivoNaoEmpregado}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Descreva os motivos"
                  rows="4"
                />
              </div>
            )}
            {formData.empregado === 'Sim' && (
              <div className="form-group">
                <label htmlFor="modalidadeTrabalho" className="form-label">
                  Se você está atualmente empregado, qual é a sua modalidade de inserção profissional no mercado de trabalho?
                </label>
                <select
                  id="modalidadeTrabalho"
                  name="modalidadeTrabalho"
                  value={formData.modalidadeTrabalho}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Selecione</option>
                  <option value="CLT">CLT</option>
                  <option value="PJ">PJ</option>
                  <option value="Autônomo">Autônomo</option>
                  <option value="Servidor Público">Servidor Público</option>
                  <option value="Estagiário">Estagiário</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="tempoPrimeiroEmprego" className="form-label">
                Quanto tempo após a conclusão da graduação você conquistou seu primeiro emprego?
              </label>
              <select
                id="tempoPrimeiroEmprego"
                name="tempoPrimeiroEmprego"
                value={formData.tempoPrimeiroEmprego}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Imediatamente">Imediatamente</option>
                <option value="Menos de 6 meses">Menos de 6 meses</option>
                <option value="6 meses a 1 ano">6 meses a 1 ano</option>
                <option value="1 a 2 anos">1 a 2 anos</option>
                <option value="Mais de 2 anos">Mais de 2 anos</option>
                <option value="Ainda não consegui">Ainda não consegui</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="faixaSalarial" className="form-label">
                Atualmente, qual sua faixa salarial? (Levando em consideração o salário mínimo atual de R$ 1.518,00)
              </label>
              <select
                id="faixaSalarial"
                name="faixaSalarial"
                value={formData.faixaSalarial}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Até 1 salário mínimo">Até 1 salário mínimo</option>
                <option value="1 a 2 salários mínimos">1 a 2 salários mínimos</option>
                <option value="2 a 3 salários mínimos">2 a 3 salários mínimos</option>
                <option value="3 a 5 salários mínimos">3 a 5 salários mínimos</option>
                <option value="5 a 10 salários mínimos">5 a 10 salários mínimos</option>
                <option value="Mais de 10 salários mínimos">Mais de 10 salários mínimos</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="atividadeProfissional" className="form-label">
                Qual a sua atividade profissional atualmente?
              </label>
              <input
                type="text"
                id="atividadeProfissional"
                name="atividadeProfissional"
                value={formData.atividadeProfissional}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Digite em CAIXA ALTA (ex: VENDEDOR, EMPREENDEDOR)"
                required
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="page-title">Avaliação da Formação</h2>
            <div className="form-group">
              <label htmlFor="contribuiuMercado" className="form-label">
                Minha formação no IFCE contribuiu de forma significativa para minha inserção no mercado de trabalho.
              </label>
              <select
                id="contribuiuMercado"
                name="contribuiuMercado"
                value={formData.contribuiuMercado}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contribuiuExercicio" className="form-label">
                Minha formação no IFCE contribuiu para o meu exercício profissional.
              </label>
              <select
                id="contribuiuExercicio"
                name="contribuiuExercicio"
                value={formData.contribuiuExercicio}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contribuiuSalario" className="form-label">
                Minha formação no IFCE contribuiu para obter um salário compatível.
              </label>
              <select
                id="contribuiuSalario"
                name="contribuiuSalario"
                value={formData.contribuiuSalario}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contribuiuAscensao" className="form-label">
                Minha formação no IFCE contribuiu para proporcionar ascensão social no âmbito profissional.
              </label>
              <select
                id="contribuiuAscensao"
                name="contribuiuAscensao"
                value={formData.contribuiuAscensao}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="melhorouCondicao" className="form-label">
                Minha formação contribuiu para melhorar minha condição socioeconômica atual.
              </label>
              <select
                id="melhorouCondicao"
                name="melhorouCondicao"
                value={formData.melhorouCondicao}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="satisfacaoPessoal" className="form-label">
                Minha formação no IFCE contribuiu para minha satisfação pessoal.
              </label>
              <select
                id="satisfacaoPessoal"
                name="satisfacaoPessoal"
                value={formData.satisfacaoPessoal}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="construiuCarreira" className="form-label">
                Minha formação contribuiu para construir minha carreira profissional.
              </label>
              <select
                id="construiuCarreira"
                name="construiuCarreira"
                value={formData.construiuCarreira}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h2 className="page-title">Sugestões e Avaliação do Curso</h2>
            <div className="form-group">
              <label htmlFor="conhecimentosEssenciais" className="form-label">
                Na sua opinião, quais conhecimentos você acredita serem essenciais para inclusão no curso, levando em consideração as demandas do mercado de trabalho?
              </label>
              <textarea
                id="conhecimentosEssenciais"
                name="conhecimentosEssenciais"
                value={formData.conhecimentosEssenciais}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Descreva os conhecimentos essenciais"
                rows="4"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="qualidadeCurso" className="form-label">
                Considero o curso concluído como:
              </label>
              <select
                id="qualidadeCurso"
                name="qualidadeCurso"
                value={formData.qualidadeCurso}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="corpoDocente" className="form-label">
                Considero o corpo docente como:
              </label>
              <select
                id="corpoDocente"
                name="corpoDocente"
                value={formData.corpoDocente}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="metodosAvaliativos" className="form-label">
                Considero os métodos avaliativos utilizados como:
              </label>
              <select
                id="metodosAvaliativos"
                name="metodosAvaliativos"
                value={formData.metodosAvaliativos}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="coordenacao" className="form-label">
                Considero a qualidade do trabalho e atendimento realizados pela Coordenação como:
              </label>
              <select
                id="coordenacao"
                name="coordenacao"
                value={formData.coordenacao}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="infraestrutura" className="form-label">
                Considero a infraestrutura e o acervo da biblioteca do meu curso como:
              </label>
              <select
                id="infraestrutura"
                name="infraestrutura"
                value={formData.infraestrutura}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="teoriaPratica" className="form-label">
                Considero a relação entre a teoria e a prática estabelecida pelos professores durante o curso de graduação como:
              </label>
              <select
                id="teoriaPratica"
                name="teoriaPratica"
                value={formData.teoriaPratica}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dominioConteudos" className="form-label">
                Considero o domínio dos conteúdos ensinados como:
              </label>
              <select
                id="dominioConteudos"
                name="dominioConteudos"
                value={formData.dominioConteudos}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="metodologias" className="form-label">
                Considero as metodologias de ensino-aprendizagem como:
              </label>
              <select
                id="metodologias"
                name="metodologias"
                value={formData.metodologias}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="estimuloAprendizado" className="form-label">
                Considero o estímulo para o aprendizado como:
              </label>
              <select
                id="estimuloAprendizado"
                name="estimuloAprendizado"
                value={formData.estimuloAprendizado}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <h2 className="page-title">Experiência Acadêmica</h2>
            <div className="form-group">
              <label htmlFor="buscaNovosConhecimentos" className="form-label">
                Após a conclusão do curso tive necessidade de buscar novos conhecimentos para aprimorar minha formação.
              </label>
              <select
                id="buscaNovosConhecimentos"
                name="buscaNovosConhecimentos"
                value={formData.buscaNovosConhecimentos}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Concordo Totalmente">Concordo Totalmente</option>
                <option value="Concordo">Concordo</option>
                <option value="Indiferente">Indiferente</option>
                <option value="Discordo">Discordo</option>
                <option value="Discordo Totalmente">Discordo Totalmente</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ambienteAcademico" className="form-label">
                O ambiente acadêmico proporcionado pelo IFCE Campus Boa Viagem contribuiu para a minha formação ética e cidadã.
              </label>
              <select
                id="ambienteAcademico"
                name="ambienteAcademico"
                value={formData.ambienteAcademico}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Concordo Totalmente">Concordo Totalmente</option>
                <option value="Concordo">Concordo</option>
                <option value="Indiferente">Indiferente</option>
                <option value="Discordo">Discordo</option>
                <option value="Discordo Totalmente">Discordo Totalmente</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="problemasPsicologicos" className="form-label">
                Enfrentei problemas psicológicos durante o curso gerado pelo ambiente acadêmico
              </label>
              <select
                id="problemasPsicologicos"
                name="problemasPsicologicos"
                value={formData.problemasPsicologicos}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Concordo Totalmente">Concordo Totalmente</option>
                <option value="Concordo">Concordo</option>
                <option value="Indiferente">Indiferente</option>
                <option value="Discordo">Discordo</option>
                <option value="Discordo Totalmente">Discordo Totalmente</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dificuldadesMateriais" className="form-label">
                Enfrentei dificuldades de ordem material que tornou minha permanência no curso desafiadora
              </label>
              <select
                id="dificuldadesMateriais"
                name="dificuldadesMateriais"
                value={formData.dificuldadesMateriais}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Selecione</option>
                <option value="Concordo Totalmente">Concordo Totalmente</option>
                <option value="Concordo">Concordo</option>
                <option value="Indiferente">Indiferente</option>
                <option value="Discordo">Discordo</option>
                <option value="Discordo Totalmente">Discordo Totalmente</option>
              </select>
            </div>
          </>
        );
      case 7:
        return (
          <>
            <h2 className="page-title">Finalização</h2>
            <div className="form-group">
              <p style={{ textAlign: 'center', fontSize: '18px', color: '#4CAF50' }}>
                Obrigado por participar da pesquisa!
              </p>
              <p style={{ textAlign: 'center', fontSize: '18px', color: '#4CAF50' }}>
                Clique em "Enviar Formulário" para concluir sua participação.
              </p>
              <p style={{ textAlign: 'center', marginTop: '20px' }}>
                Suas respostas são muito importantes para melhorarmos nossos cursos.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="formulario-container">
      <HeaderFormulario />
      <main className="formulario-main">
        <div className="formulario-content">
          <h1 className="formulario-title">Pesquisa com egressos IFCE</h1>
          
          <p className="formulario-description">
            Este formulário faz parte da Pesquisa de Acompanhamento de Egressos do IFCE/Campus Boa Viagem, 
            destinada aos egressos dos cursos técnicos e superiores. Suas respostas serão tratadas com 
            confidencialidade e utilizadas para avaliação e melhoria dos nossos cursos. 
            Agradecemos sua participação! Pro-Reitoria de Extensão e equipe do projeto.
          </p>
          
          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progress-text">
              Página {currentPage + 1} de 8 - {Math.round(progress)}% completo
            </div>
          </div>
          
          <form className="formulario-form" onSubmit={handleSubmit}>
            {renderPage()}
            
            <div className={`form-navigation ${currentPage === 7 ? 'single-button' : ''}`}>
              {currentPage > 0 && (
                <button 
                  type="button" 
                  className="nav-button prev-button"
                  onClick={handlePrevious}
                >
                  Anterior
                </button>
              )}
              
              {currentPage < 7 ? (
                <button 
                  type="button" 
                  className="nav-button next-button"
                  onClick={handleNext}
                >
                  Próximo
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="nav-button next-button"
                >
                  Enviar Formulário
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Formulario;