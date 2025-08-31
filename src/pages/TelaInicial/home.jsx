import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header';
import ImageSection from '../../components/ImageSection';
import './home.css';

// Componente para o texto principal
const MainContent = () => {
  return (
    <div className="main-content">
      <h2 className="content-title">Acompanhamento de egressos</h2>
      <p className="content-text">
        O projeto de acompanhamento de egressos "A Voz do Egresso: instrumento de tomada de consciência e intervenção na realidade" tem por objetivo geral "mapear os egressos dos cursos de (Téc. em Redes de Computadores, Téc. em Agropecuária, Agropecuária Subsequente, Zootecnia, Análise e Desenvolvimento de Sistemas e Licenciatura em Química) do Instituto Federal de Educação, Ciência e Tecnologia do Ceará - IFCE/Campus Boa Viagem com o intuito de analisar a situação profissional, impactos das experiências acadêmicas recebidas na formação inicial e expectativas em relação à formação continuada; assim como, integrar os egressos à comunidade acadêmica, mantendo-os em constante contato com o campus". O referido projeto, aprovado pela Pró-reitoria de Extensão - PROEXT por meio do Edital 21/2023 - processo SEI de adesão n° 23293.000890/2023-10, é coordenado pelo professor Dr. Thales Siqueira Arrais, docente do campus.
      </p>
    </div>
  );
};

// Componente para a seção inferior
const BottomSection = () => {

  const navigate = useNavigate();

  return (
    <div className="bottom-section">
      <h2 className="importance-title">Por que é importante?</h2>
      <p className="importance-text">
        O projeto "A Voz do Egresso" é essencial para avaliar o impacto da formação do IFCE/Campus Boa Viagem na trajetória profissional dos ex-alunos, fortalecendo o vínculo com a instituição e orientando melhorias que aproximam o ensino das demandas reais do mercado e da comunidade.
      </p>
      <div className="cta-section">
        <p className="cta-text">
          O IFCE Campus Boa Viagem quer saber: Egresso, onde está você?
        </p>
        <p className="cta-text">
          Responda ao questionário e mantenha seu vínculo com a instituição!
        </p>
        <button className="responder-btn" onClick={() => navigate("/formulario")} >Responder questionário</button>
      </div>
    </div>
  );
};

// Componente para o footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-title">Links</h3>
          <ul className="footer-links">
            <li><a href="#">Sobre o IFCE</a></li>
            <li><a href="#">Contatos</a></li>
            <li><a href="#">Central de atendimento</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Endereço</h3>
          <div className="footer-address">
            <p>Rodovia Presidente Juscelino</p>
            <p>Kubitschek, BR 020, Km 209, s/n, bairro</p>
            <p>Anafuê, CEP: 63.870-000</p>
          </div>
        </div>
        
        <div className="footer-column">
          <div className="footer-contact">
            <h3 className="footer-title">Coordenador:</h3>
            <p>Thales Siqueira Arrais</p>
            <p>Contato: thales.siqueira@ifce.edu.br</p>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">Desenvolvedor:</h3>
            <p>Yan Uchôa</p>
            <p>Contato: yan.uchoa63@ifce.edu.br</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Componente discreto para acesso do coordenador
const AdminLink = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-link-container">
      <button 
        className="admin-link" 
        onClick={() => navigate("/login")}
        title="Acesso do Coordenador"
      >
        Área Administrativa
      </button>
    </div>
  );
};

// Componente principal da página
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <main className="main-container">
        <div className="content-grid">
          <ImageSection />
          <MainContent />
        </div>
      </main>
      <BottomSection />
      <Footer />
      <AdminLink />
    </div>
  );
};

export default Home;
