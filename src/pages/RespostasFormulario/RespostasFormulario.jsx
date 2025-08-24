import React, { useState } from 'react';
import ifceLogo from '../../assets/ifce-logo.png';
import './respostasFormulario.css';

const RespostasFormulario = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dados mockados para demonstração
  const [respostas] = useState([
    {
      id: 1,
      nome: "Yan Uchoa Da Silva",
      curso: "ADS",
      email: "yan@gmail.com",
      anoTermino: "2025"
    },
    {
      id: 2,
      nome: "Maria Silva Santos",
      curso: "Sistemas de Informação",
      email: "maria.silva@email.com",
      anoTermino: "2024"
    },
    {
      id: 3,
      nome: "João Pedro Costa",
      curso: "ADS",
      email: "joao.costa@email.com",
      anoTermino: "2023"
    },
    {
      id: 4,
      nome: "Ana Beatriz Lima",
      curso: "Sistemas de Informação",
      email: "ana.lima@email.com",
      anoTermino: "2024"
    },
    {
      id: 5,
      nome: "Carlos Eduardo Rocha",
      curso: "ADS",
      email: "carlos.rocha@email.com",
      anoTermino: "2023"
    }
  ]);

  const filteredRespostas = respostas.filter(resposta =>
    resposta.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resposta.curso.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resposta.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resposta.anoTermino.includes(searchTerm)
  );

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
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">Respostas ao formulário</h1>
          
          {/* Barra de filtros */}
          <div className="filters-section">
            <label htmlFor="search" className="filters-label">Filtros:</label>
            <div className="search-container">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                id="search"
                placeholder="Procurar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Tabela de respostas */}
          <div className="table-container">
            <table className="respostas-table">
              <thead>
                <tr>
                  <th className="th-nome">Nome</th>
                  <th className="th-curso">Curso</th>
                  <th className="th-email">E-mail</th>
                  <th className="th-ano">Ano término</th>
                </tr>
              </thead>
              <tbody>
                {filteredRespostas.map((resposta) => (
                  <tr key={resposta.id} className="table-row">
                    <td className="td-nome">{resposta.nome}</td>
                    <td className="td-curso">{resposta.curso}</td>
                    <td className="td-email">{resposta.email}</td>
                    <td className="td-ano">{resposta.anoTermino}</td>
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
