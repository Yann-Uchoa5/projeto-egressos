import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ifceLogo from '../../assets/ifce-logo.png';
import './respostasFormulario.css';

const RespostasFormulario = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [idadeFilter, setIdadeFilter] = useState('');
  
  const [respostas, setRespostas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Opções de faixa etária para o filtro
  const faixasEtarias = [
    { value: '', label: 'Todas as idades' },
    { value: '18-25 anos', label: '18-25 anos' },
    { value: '26-35 anos', label: '26-35 anos' },
    { value: '36-45 anos', label: '36-45 anos' },
    { value: '46-55 anos', label: '46-55 anos' },
    { value: '56 anos ou mais', label: '56 anos ou mais' }
  ];

  // Função para fazer logout
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:8000/api/v1/admin/egressos', {
          headers: {
            'Authorization': token ? `Bearer ${token}` : ''
          }
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.detail || 'Falha ao carregar respostas');
        }
        const data = await res.json();
        setRespostas(Array.isArray(data) ? data : []);
      } catch (e) {
        setError('Não foi possível carregar as respostas.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filteredRespostas = respostas.filter(resposta => {
    // Filtro por texto (nome, curso, email)
    const matchesSearch = searchTerm === '' || 
      resposta.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (resposta.curso && resposta.curso.toLowerCase().includes(searchTerm.toLowerCase())) ||
      resposta.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtro por faixa etária - SOLUÇÃO PARA PRODUÇÃO
    let matchesAge = true;
    if (idadeFilter !== '') {
      // Verifica se há dados_pessoais e faixaEtaria
      if (resposta.dados_pessoais && resposta.dados_pessoais.faixaEtaria) {
        // Usa a faixa etária real dos dados
        const faixaEtaria = resposta.dados_pessoais.faixaEtaria;
        matchesAge = faixaEtaria === idadeFilter;
      } else {
        // Se não há dados de faixa etária, não inclui no filtro (mostra todos)
        matchesAge = false;
      }
    }
    
    return matchesSearch && matchesAge;
  });

  const handleNomeClick = (id) => {
    navigate(`/egresso/${id}`);
  };

  return (
    <div className="respostas-container">
      {/* Header verde com informações do coordenador */}
      <header className="coordenador-header">
        <div className="coordenador-info">
          <div className="avatar">
            <span>T</span>
          </div>
          <div className="user-details">
            <span className="user-name">Tales</span>
            <span className="user-role">Coordenador</span>
          </div>
        </div>
                 <button 
           onClick={handleLogout}
           className="logout-button"
           title="Sair da área administrativa"
         >
           ↪ Sair
         </button>
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">Respostas ao formulário</h1>
          
          {/* Barra de filtros */}
          <div className="filters-section">
            <label htmlFor="search" className="filters-label">Filtros:</label>
            <div className="filters-container">
              <div className="search-container">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  id="search"
                  placeholder="Procurar por nome, curso ou email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              
              <div className="age-filter-container">
                <select
                  id="idadeFilter"
                  value={idadeFilter}
                  onChange={(e) => setIdadeFilter(e.target.value)}
                  className="age-filter-select"
                >
                  {faixasEtarias.map((faixa) => (
                    <option key={faixa.value} value={faixa.value}>
                      {faixa.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="results-info">
            <p>Mostrando {filteredRespostas.length} de {respostas.length} egressos</p>
          </div>

          {/* Tabela de respostas */}
          <div className="table-container">
            {loading && <div>Carregando...</div>}
            {error && !loading && <div style={{ color: '#b00020' }}>{error}</div>}
            <table className="respostas-table">
              <thead>
                <tr>
                  <th className="th-nome">Nome</th>
                  <th className="th-curso">Curso</th>
                  <th className="th-email">E-mail</th>
                </tr>
              </thead>
              <tbody>
                {filteredRespostas.map((resposta) => (
                  <tr key={resposta.id} className="table-row">
                    <td className="td-nome">
                      <button 
                        className="nome-link"
                        onClick={() => handleNomeClick(resposta.id)}
                      >
                        {resposta.nome}
                      </button>
                    </td>
                    <td className="td-curso">{resposta.curso}</td>
                    <td className="td-email">{resposta.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RespostasFormulario;
