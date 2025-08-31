import { useState, useCallback } from 'react';

export const useFieldValidation = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const [isChecking, setIsChecking] = useState({});

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
    
    console.log('Validando email:', email);
    setIsChecking(prev => ({ ...prev, email: true }));
    const emailExists = await checkEmailExists(email);
    setIsChecking(prev => ({ ...prev, email: false }));
    
    console.log('Email existe:', emailExists);
    const newErrors = {
      ...validationErrors,
      email: emailExists ? 'Este email já está cadastrado, por favor escolha outro' : null
    };
    console.log('Novos erros de validação:', newErrors);
    setValidationErrors(newErrors);
  }, [checkEmailExists, validationErrors]);

  const validateTelefone = useCallback(async (telefone) => {
    if (!telefone) return;
    
    console.log('Validando telefone:', telefone);
    setIsChecking(prev => ({ ...prev, telefone: true }));
    const telefoneExists = await checkTelefoneExists(telefone);
    setIsChecking(prev => ({ ...prev, telefone: false }));
    
    console.log('Telefone existe:', telefoneExists);
    const newErrors = {
      ...validationErrors,
      telefone: telefoneExists ? 'Este telefone já está cadastrado, por favor escolha outro' : null
    };
    console.log('Novos erros de validação:', newErrors);
    setValidationErrors(newErrors);
  }, [checkTelefoneExists, validationErrors]);

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
    isChecking,
    validateEmail,
    validateTelefone,
    clearValidationError,
    hasValidationErrors
  };
};
