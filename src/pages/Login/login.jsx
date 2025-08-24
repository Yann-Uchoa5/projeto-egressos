import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Dados do formulário:', formData);
    
    // Simulando login bem-sucedido - redireciona para a página de respostas
    // Em um cenário real, você verificaria as credenciais primeiro
    navigate('/respostas');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <p className="login-description">
          Faça login para ver os dados dos egressos.
        </p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          
                     <div className="form-group">
             <label htmlFor="password" className="form-label">Senha</label>
             <input
               type="password"
               id="password"
               name="password"
               value={formData.password}
               onChange={handleInputChange}
               className="form-input"
               required
             />
           </div>
           
           <div className="remember-me">
             <input
               type="checkbox"
               id="rememberMe"
               name="rememberMe"
               checked={formData.rememberMe}
               onChange={handleInputChange}
               className="checkbox-input"
             />
             <label htmlFor="rememberMe" className="checkbox-label">
               Lembre de mim
             </label>
           </div>
           
           <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
