import { useCallback } from 'react';

export const useInputValidation = () => {
  // Regex para aceitar apenas letras, espaços e acentos
  const onlyLettersRegex = /^[a-zA-ZÀ-ÿ\s]*$/;
  
  // Regex para aceitar letras, números e espaços (para campos como nome completo)
  const lettersAndNumbersRegex = /^[a-zA-ZÀ-ÿ0-9\s]*$/;
  
  // Regex para aceitar apenas letras e espaços (para cidades, estados)
  const onlyLettersAndSpacesRegex = /^[a-zA-ZÀ-ÿ\s]*$/;
  
  // Regex para aceitar apenas números e símbolos de telefone (parênteses, hífens, espaços)
  const phoneRegex = /^[0-9\s\(\)\-\+]*$/;

  const validateLettersOnly = useCallback((value) => {
    return onlyLettersRegex.test(value);
  }, []);

  const validateLettersAndNumbers = useCallback((value) => {
    return lettersAndNumbersRegex.test(value);
  }, []);

  const validateLettersAndSpaces = useCallback((value) => {
    return onlyLettersAndSpacesRegex.test(value);
  }, []);

  const validatePhone = useCallback((value) => {
    return phoneRegex.test(value);
  }, []);

  const sanitizeLettersOnly = useCallback((value) => {
    return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
  }, []);

  const sanitizeLettersAndNumbers = useCallback((value) => {
    return value.replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, '');
  }, []);

  const sanitizeLettersAndSpaces = useCallback((value) => {
    return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
  }, []);

  const sanitizePhone = useCallback((value) => {
    return value.replace(/[^0-9\s\(\)\-\+]/g, '');
  }, []);

  return {
    validateLettersOnly,
    validateLettersAndNumbers,
    validateLettersAndSpaces,
    validatePhone,
    sanitizeLettersOnly,
    sanitizeLettersAndNumbers,
    sanitizeLettersAndSpaces,
    sanitizePhone
  };
};
