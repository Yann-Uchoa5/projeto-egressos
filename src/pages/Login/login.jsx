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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = new URLSearchParams();
      body.append('username', formData.email);
      body.append('password', formData.password);

      const res = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Falha no login');
      }
      const data = await res.json();
      localStorage.setItem('token', data.access_token);
      navigate('/respostas');
    } catch (error) {
      alert('Credenciais inválidas');
    }
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
