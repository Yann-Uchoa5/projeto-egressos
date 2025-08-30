import { useState, useCallback } from 'react';

export const useFieldValidation = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const checkEmailExists = useCallback(async (email) => {
    if (!email || email.length < 3) return false;
    
    try {
      const response = await fetch(`http://localhost:8000/api/v1/check-email/${encodeURIComponent(email)}`);
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error('Erro ao verificar email:', error);
      return false;
    }
  }, []);

  const checkTelefoneExists = useCallback(async (telefone) => {
    if (!telefone || telefone.length < 8) return false;
    
    try {
      const response = await fetch(`http://localhost:8000/api/v1/check-telefone/${encodeURIComponent(telefone)}`);
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error('Erro ao verificar telefone:', error);
      return false;
    }
  }, []);

  const validateEmail = useCallback(async (email) => {
    if (!email) return;
    
    const emailExists = await checkEmailExists(email);
    setValidationErrors(prev => ({
      ...prev,
      email: emailExists ? 'Este email já está cadastrado, por favor escolha outro' : null
    }));
  }, [checkEmailExists]);

  const validateTelefone = useCallback(async (telefone) => {
    if (!telefone) return;
    
    const telefoneExists = await checkTelefoneExists(telefone);
    setValidationErrors(prev => ({
      ...prev,
      telefone: telefoneExists ? 'Este telefone já está cadastrado, por favor escolha outro' : null
    }));
  }, [checkTelefoneExists]);

  const clearValidationError = useCallback((field) => {
    setValidationErrors(prev => ({
      ...prev,
      [field]: null
    }));
  }, []);

  const hasValidationErrors = useCallback(() => {
    return Object.values(validationErrors).some(error => error !== null);
  }, [validationErrors]);

  return {
    validationErrors,
    validateEmail,
    validateTelefone,
    clearValidationError,
    hasValidationErrors
  };
};
